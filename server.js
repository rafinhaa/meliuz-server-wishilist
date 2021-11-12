const jsonServer = require('json-server'); 

const server = jsonServer.create(); // cria um servidor json-server que vai receber requisições
const router = jsonServer.router('db.json'); // cria um roteador que vai receber as requisições
const middlewares = jsonServer.defaults(); // middlewares é um array de middlewares que vão ser executados antes de receber a requisição
const port = process.env.PORT || 3000; // define a porta que o servidor vai rodar

server.use(middlewares); // executa os middlewares
server.use(router); // executa o roteador
server.listen(port, () => { // executa o servidor na porta definida
    console.log('JSON Server rodando');
});