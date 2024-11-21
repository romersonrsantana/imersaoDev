import express from "express";
import conectarAoBanco from "../src/config/dbCondig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO) //todos os dados dessa conexão irão ficar salvos dentro dessa variável.

const posts = [ //dados ´para consumir e devolver por uma rota
    {
        id: 1,
        descricao: "Gato fazendo ioga",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato dormindo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gato fazendo panqueca",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato brincando",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gato curioso",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Gato explorador",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 7,
        descricao: "Gato sonhador",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

// Adicionar uma rota no express para ele converter o aquivo de textos em json
app.use(express.json()); //Servidor você vai devolver json para as pessoas

app.listen(3000, () => {
    console.log("Hello World...");
});

app.get("/postes", (req, res) => {
    res.status(200).json(posts); //pegar o que ele vai ter como resposta e converter para json
});

//Substituindo a informação por um dado variável
function buscarPostPorID(id) {
    return posts.findIndex((post) => {      //buscar dados em uma estrutura, verifica
        return post.id === Number(id)
    })
}

async function getTodosPosts() {
    const db = conexao.db()
}

app.get("/postes/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id) //A requisição tem o número do id
    res.status(200).json(posts[index])
})

//Escrever uma rota para devolver dados que venha do objeto array...

//node --watch server.js

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.