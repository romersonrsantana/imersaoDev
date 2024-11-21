import express from "express";
import routes from "../src/routes/postRoutes.js";

const app = express();
routes(app)

app.listen(3000, () => {
    console.log("Hello World...");
});






//Substituindo a informação por um dado variável
//function buscarPostPorID(id) {
//    return posts.findIndex((post) => {      //buscar dados em uma estrutura, verifica
 //       return post.id === Number(id)
 //   })
//}


//app.get("/postes/:id", (req, res) => {
//    const index = buscarPostPorID(req.params.id) //A requisição tem o número do id
//   res.status(200).json(posts[index])
//})

//Escrever uma rota para devolver dados que venha do objeto array...

//node --watch server.js

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.