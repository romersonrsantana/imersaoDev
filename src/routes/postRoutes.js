import express from "express";

import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Adicionar uma rota no express para ele converter o aquivo de textos em json
    //Servidor você vai devolver json para as pessoas
    app.use(express.json()); 
    
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost )

}

export default routes;

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.