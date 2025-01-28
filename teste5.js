import express from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.post("/reverse", (req, res) => {
    const palavraOriginal = req.body.palavra;
    console.log(palavraOriginal);
    console.log(typeof palavraOriginal);
    let stringInversa = "";
    for (let i = palavraOriginal.length - 1; i >= 0; i--) {
        stringInversa += palavraOriginal[i];
    }

    res.json({
        palavraOriginal: palavraOriginal,
        inverso: stringInversa
    });
    });
    
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });