import express from "express"
import { signIn, signUp } from "../controller/auth.js";

const auth = express.Router();

auth
    .post("/signup", signUp)
    .post("/signIn", signIn)

export { auth }