import { db } from "../../db.js"

export const getRecord  = async (req, res) => {
    const queryText = ` SELECT * FROM "record"`

    try {
        const result = await db.query(queryText);
        res.send(result.rows)
    }
    catch (error) {
        console.log(error)
    }
}

export const createRecord = async (req, res) => {
    const { name, amount, description, transactionType } = req.body;
  
    const queryText = `
    INSERT INTO "record" (name, amount, description, transactionType)
    VALUES ($1, $2, $3, $4) RETURNING *`; 
  
    try {
      const result = await db.query(queryText, [
        name,
        amount,
        description,
        transactionType
        ]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: "DATABASE ERROR"})
    }
  };

  export const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { name, amout, description, transactionType  } = req.body;
  
    try {
      const result = await db.query(
        "UPDATE record SET name = $1, amout = $2, description = $3, transactionType = $4 WHERE id = $5 RETURNING *",
        [name, amout, description, transactionType, id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).send('Record not found');
      }
      else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  };

  export const deleteRecord = async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.query(
        "DELETE from record WHERE id = $1 RETURNING *",
        [id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).send('Record not found');
      }
      else {
        res.json(result.rows[0]);
        res.send("Record deleted successfully")
      }
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('Internal Server Error');
    }
  };