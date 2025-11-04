import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota inicial para teste
app.get("/", (req, res) => {
  res.send("🚀 Backend funcionando com sucesso no Render!");
});

// Porta (Render usa variável de ambiente PORT)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
