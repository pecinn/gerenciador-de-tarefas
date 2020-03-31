const express = require('express');

const routes = express.Router();

const TarefaController = require('./controllers/TarefaController');


//Buscar Tarefa
routes.get('/tarefas', TarefaController.index);

//Criar Tarefa
routes.post('/tarefas', TarefaController.create);
module.exports = routes;

//Remover Tarefa
routes.delete('/tarefas/:id', TarefaController.delete);
