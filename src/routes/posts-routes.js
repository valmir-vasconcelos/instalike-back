import cors from "cors";
import express from "express";
import multer from "multer";
import {
  atualizarNovoPost,
  listarPosts,
  postarNovoPost,
  uploadImagem,
} from "../controllers/posts-controller.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

/* Para Windows (sem isso o arquivo será salvo com nome aleatório)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ dest: "./uploads", storage }); */

/* Para Linux e Mac */
const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
