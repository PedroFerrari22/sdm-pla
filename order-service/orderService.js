const express = require('express');
const app = express();
app.use(express.json());

app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    console.log(`Pedido recebido para o usuário ID: ${pedido.userId}`);
    res.send({message: 'Pedido criado com sucesso!', pedido});
});

app.listen(4000, () => console.log('Order Service rodando na porta 4000'));