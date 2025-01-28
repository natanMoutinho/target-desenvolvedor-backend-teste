import express from "express";
const app = express();
const port = 3333;

app.use(express.json());


app.get("/test1", (req, res) => {
    const INDICE = 13;
    
    let soma=0;
    let k=0;
    
    while(k<INDICE){
        k+=1;
        soma+=k;
    }
    res.json({
    soma: soma
   })
});

app.post("/test2", (req, res) => {
    const numero = req.body.numero;
    let resultado = `${numero} não pertence à sequência de Fibonacci.`;
    let a = 0, b = 1;
    while (a <= numero) {
        if (a === numero) {
            resultado = `${numero} pertence à sequência de Fibonacci.`;
        }
        [a, b] = [b, a + b]; 
    }
    res.json({
     resultado: resultado
    })
});

app.post("/test3", (req, res) => {
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

app.post("/test4", (req, res) => {
    const estadosFaturamento = req.body;
    
    const listaConvertida = estadosFaturamento.map(estado => {
        const tiraMilhar = estado.faturamento.replace(".", "");
        return {
            "estado":estado.estado,
            "faturamento":parseFloat(tiraMilhar.replace(",", "."))}
    });
    
    const faturamentoTotal = listaConvertida.reduce((total, estado) => total + estado.faturamento, 0);

    const estadosComPercentual = listaConvertida.map(estado => {
        const percentual = ((estado.faturamento / faturamentoTotal) * 100).toFixed(2);
    return { estado: estado.estado, percentual: `${percentual}%` };
    });
    res.json({
        PercentualDeCadaEstado: estadosComPercentual
      });
    
});

app.post("/test5", (req, res) => {
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