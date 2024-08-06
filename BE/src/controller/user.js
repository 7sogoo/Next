import { db } from "../../db.js"

export const getUser  = async (req, res) => {
    const queryText = ` SELECT * FROM "user"`

    try {
        const result = await db.query(queryText);
        res.send(result.rows)
    }
    catch (error) {
        console.log(error)
    }
}

export const createUser = async (req, res) => {
    const { email, name, password, avatarImg, currencyType } = req.body;
  
    const queryText = `
    INSERT INTO "user" (email, name, password, avatarImg, currencyType)
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
  };

  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
  
    try {
      const result = await db.query(
        "UPDATE user SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
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
  };

  export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.query(
        "DELETE from user WHERE id = $1 RETURNING *",
        [id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).send('User not found');
      }
      else {
        res.json(result.rows[0]);
        res.send("User deleted successfully")
      }
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  };