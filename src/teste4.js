import express from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.post("/participacao", (req, res) => {
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
  
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });