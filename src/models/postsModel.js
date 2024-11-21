import conectarAoBanco from "../config/dbCondig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO) //todos os dados dessa conexão irão ficar salvos dentro dessa variável.

//função assíncrona...
export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes"); //objetos para representar o banco e a coleção a coleção são os posts... arquivos
    const colecao = db.collection("posts");
    return colecao.find().toArray(); //retorna o que encontrar e faz uma conversão para array
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E AO Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.