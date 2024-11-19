import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Hello World...")
});

app.get("/book", (req, res) => {
    const book = {
        title: "Herry Potter",
        Author: "J.K Rowling",
        Year: 1997
    };

    res.json(book);

});

//Toda Honra e Toda Glória Ao Deus de Abraão, Isaac, Jacó, Israel e Moisés E Ao Seu Filho Amado Jesus Cristo. Louvado Seja Nosso Senhor Jesus Cristo, Para Sempre Seja Louvado. Amém.