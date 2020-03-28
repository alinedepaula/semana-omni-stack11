const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // routes é um arquivo por isso precisa de ponto barra para não achar que é um pacote

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);
 


/**
 * Rota / Recurso
 */

/**
 * Métoodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma info...
 * DELETE: Deletar uma info...
 */

 /**
  * Tipos de Parametros:
  * 
  * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */