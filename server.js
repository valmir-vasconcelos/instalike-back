import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fazendo yoga",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Gato fazendo panqueca",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000...");
});

app.get("/api/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  return res.status(200).json(posts[index]);
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}
