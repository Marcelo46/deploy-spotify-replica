import express, { response } from "express";
import { db } from "./connect.js";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors()); //middleware
// app.use(express.json()); //Na requisição Post transforma texto em json

app.get("/", (request, response) => {
  response.send("Olá mundo!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
