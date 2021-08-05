const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get("/", (req,res) => {
    const items = [
        {
            title: "D",
            message: "Decifrando o código ESJ"

        },
        {
            title: "E",
            message: "Extendendo conhecimento"

        },
        {
            title: "M",
            message: "Marchando ao progresso"

        },
        {
            title: "A",
            message: "Abrindo fronteiras"

        },
    ]
    res.render("pages/index",{qualitys:items});
});

app.get("/sobre", (req,res) => {
    res.render("pages/about");
});

app.listen(8080);
console.log("rodando")