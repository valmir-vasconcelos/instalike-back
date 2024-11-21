import express from "express";
import conectarAoBanco from "./src/config/db-config.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000...");
});

async function getTodosPosts() {
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

app.get("/api/posts", async (req, res) => {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
});

// app.get("/api/posts/:id", (req, res) => {
//   const index = buscarPostPorId(req.params.id);
//   return res.status(200).json(posts[index]);
// });

// function buscarPostPorId(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }
