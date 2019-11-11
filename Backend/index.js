const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const sequelize = require('./src/database/database');
const app = express();

//somente para o teste
var projeto = require('./src/controllers/projetoController');


app.use(express.json());
app.use(cors());


sequelize.sync({force: false}).then( () => {
    const port = 3008;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});

//somente para os testes
app.route("/protocolo")
  .get(projeto.SearchAll)
  .post(projeto.Insert);  

app.route("/protocolo/:id")
  .get(projeto.SearchOne)
  .put(projeto.Update)
  .delete(projeto.Delete)
module.exports = app;

mongoose.connect('mongodb://localhost:27017/PROJETO',
{useNewUrlParser: true});
requireDir('./src/models');
app.use('/sistema', require('./src/routes/routes'));
app.listen(3002);