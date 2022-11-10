import express from "express";
import ejslayout from "express-ejs-layouts";
import colors from "colors";
import session from "express-session";
import dotenv from "dotenv";
import { mongodbConnection } from "./config/db.js";
import { localsMiddlewre } from "./middleware/localsmiddlewar.js";
import userRoutes from "./routes/userRoutes.js";

// !Dotenv Config
dotenv.config();
const PORT = process.env.PORT || 9090;

// !Express Init
const app = express();

//  !Express Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ! Setup session
app.use(
  session({
    secret: "abusayeed",
    saveUninitialized: true,
    resave: false,
  })
);

// ! Setup Locals
app.use(localsMiddlewre);

//  !Static Folder
app.use(express.static("public"));

//  !Ejs Template Setup
app.set("view engine", "ejs");
app.use(ejslayout);
app.set("layout", "layouts/app");

// ! Routeing
app.use("/", userRoutes);

// !Server Listen
app.listen(PORT, () => {
  mongodbConnection();
  console.log(`server is Running ${PORT}`.bgGreen.black);
});
