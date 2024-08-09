import { db } from "../../db.js"
import { createUser} from "./user.js";

export const signUp = async (req, res) => {
    try {
        const user = await createUser(req, res);
        res.status(200).json({ success: true, user: user})
    }    
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "database error"})
    }
}
export const signIn = async (req, res) => {
    const { password, email } = req.body;
    const queryText = 'SELECT * FROM "user" WHERE email = $1';

    try {
        const result = await db.query(queryText, [email]);
        const user = result.rows;
        console.log(user)

        if (password === user[0].password) {
            return res.status(200).json({ success: true, user: user});
        } else {
            return res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Database error" });
    }
};


