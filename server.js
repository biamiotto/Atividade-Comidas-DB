import express from "express";
import dotenv from "dotenv";
import comidasRoutes from "./src/routes/comidasRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

const serverPort = process.env.PORT || 5557;

app.use("/comidas", comidasRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Servidor Funcionando...");
});

app.listen(serverPort, () => {
  console.log(`Servidor Funcionando em http://localhost:${serverPort}`);
});