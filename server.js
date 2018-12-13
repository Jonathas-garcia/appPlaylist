const restify = require('restify');
const server = restify.createServer();

server.get('/', (req, res) => {
    res.send({mensagem:"Hello World"});
   });


   server.listen(3000, () => {
    console.log("Servidor em pé");
  });
