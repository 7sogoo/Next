import express from "express";
import bodyParser from "body-parser";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/installExtension", async (req, res) => {
  const extensionQueryText = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  `;

  try {
    await db.query(extensionQueryText);
    res.send("Extension installed successfully");
  } catch (error) {
    console.error(error);
  }
});

app.get("/createTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS "users" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE,
    name VARCHAR(50) NOT NULL,
    password TEXT,
    avatarImg TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currencyType currency_type DEFAULT 'USD' NOT NULL
  );
  `;

  try {
    await db.query(tableQueryText);
    res.send("Table created successfully");
  } catch (error) {
    console.error(error);
  }
});

app.post("/users/create", async (req, res) => {
  const { email, name, password, avatarImg, currencyType } = req.body;

  const queryText = `
  INSERT INTO "users" (email, name, password, avatarImg, currencyType)
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  try {
    const result = await db.query(queryText, [
      email,
      name,
      password,
      avatarImg,
      currencyType
    ]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "DATABASE ERROR"})
  }
});

app.get("/users", async (req, res) => {
  const queryText = `SELECT * FROM "users"`;

  try {
    const result = await db.query(queryText);
    res.json(result.rows); 
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});


app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const result = await db.query(
      "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
      [name, email, password, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('User not found');
    }
    else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});


// app.get("/", async (req, res) => {
//   const tableQueryText = `
//   CREATE TABLE IF NOT EXISTS "users" (
//       id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) UNIQUE,
//       username VARCHAR(255) NOT NULL,
//       password VARCHAR(50) UNIQUE,
//       updatedAt TIMESTAMP,
//       createdAt TIMESTAMP,
//       currencyType VARCHAR(10) DEFAULT 'MNT'
//   );
//   `;

//   try {
//     await db.query(tableQueryText);
//     res.send("Table created successfully");
//   } catch (error) {
//     console.error("Error creating table:", error);
//     res.status(500).send("Error creating table");
//   }
// });

// app.get("/createUser", async (req, res) => {
//   const queryText = `
//   INSERT INTO "users" (id uuid, name, email, username, password, updatedAt, createdAt, currencyType)
//   VALUES ('Bat-Orgil', 'Bat-Orgil@gmail.com', 'Bat', 'Bataa123', '2022-05-16', '2023-04-12', 'MNT');
//   `;

//   try {
//     await db.query(queryText);
//     res.send("User created successfully");
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).send("Error creating user");
//   }
// });

// app.get("/getUser", async (req, res) => {
//   const queryText = `
//     SELECT * FROM "users"
//    `
//   try {
//     const users = await db.query(queryText);
//     res.send(users.rows);
//   } catch (error) {
//     console.log(error);
//   }

// });

// app.post("/write", (req, res) => {
//   const data = fs.writeFile("./DATA.txt", data, "utf8", (err, content) => {});
//   data.push(req.body);
//   res.send("success");
// });

// app.get("/read", (req, res) => {
//   fs.readFile("./DATA.txt", "utf8", (err, data) => {
//     res.send(data);
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
