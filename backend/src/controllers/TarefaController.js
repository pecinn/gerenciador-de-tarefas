const connection = require('../database/connection');

module.exports = {

  //Buscar Tarefa
  async index(request, response) {
    const tarefas = await connection('tarefas')
    .select('*');
    return response.json(tarefas);
  },
  
  //Criar Tarefa
  async create(request, response) {

    const { atividade, description, tempo } = request.body;
    const [id] = await connection('tarefas').insert({
      atividade,
      description,
      tempo,
    })
    return response.json({ id, atividade });
  },

  //Remover Tarefa
  async delete(request, response) {
    const { id } = request.params;

    const tarefa = await connection('tarefas')
    .where('id', id)
    .first();

    if(tarefa.id == null){
      return response.status(401).json({ error: 'Operation not permited.'});
    }

    await connection('tarefas').where('id', id).delete();
    
    return response.status(204).send();
  }
};