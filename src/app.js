// En app.js se va a instaciar exprees
import express from "express";
//import network from "./user/network.js";
import { user, story } from "./componentes";
// por ende por ahora esta archivo solo va a exportar app
export const app = express();

app.use(express.json()); //activador para req.body, por post o por put
app.use(express.urlencoded({ extended: true }));

app.use("/user", user);
app.use("/story", story);

//app.use("/", network);
// las rutas deberian tener un archivo decidado para ellas