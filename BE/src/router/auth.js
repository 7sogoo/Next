import express from "express"
import { signIn, signUp } from "../controller/auth.js";

const auth = express.Router();

auth
    .post("/signup", signUp)
    .get("/signIn", signIn)

export { auth }