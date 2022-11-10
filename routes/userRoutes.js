import express from "express";
import {
  forgetpasspage,
  loginpage,
  profilepage,
  registerpage,
  registeruser,
} from "../controller/userController.js";

// ! routes

const routes = express.Router();

// ! routing

routes.get("/", profilepage);
routes.get("/login", loginpage);
routes.get("/register", registerpage);
routes.get("/forgetpass", forgetpasspage);
routes.post("/register", registeruser);

// ! Export Defult

export default routes;
