import express from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.post("/faturamentos", (req, res) => {
    const faturamentos = req.body;
  
    const valoresValidos = faturamentos.map(dia => dia.valor).filter(valor => valor > 0);
  
    if (valoresValidos.length > 0) {
      const menorValor = Math.min(...valoresValidos);
      const maiorValor = Math.max(...valoresValidos);
  
      const mediaMensal = valoresValidos.reduce((soma, valorAtual) => soma + valorAtual, 0) / valoresValidos.length;
  
      const diasAcimaMedia = faturamentos.filter(dia => dia.valor > mediaMensal).length;
  
      res.json({
        menorValor: menorValor.toFixed(2),
        maiorValor: maiorValor.toFixed(2),
        diasAcimaDaMedia: diasAcimaMedia
      });
    } else {
      res.json({ mensagem: "Sem dados válidos." });
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });



