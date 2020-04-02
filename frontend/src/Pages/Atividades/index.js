import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './atividades.css';
import Cronometro from '../../components/cronometro';

export default function Atividades(props) {

  const [tarefas, setTarefas] = useState([]);
  const [tempo, setTempo] = useState('');

  
  async function start(e) {
   alert('função de iniciar o cronometro');
  }

  function stop() {
    alert('função de parar o cronometro');
  }
  
  useEffect(() => {
    api.get('tarefas').then(response => {
      setTarefas(response.data);
    })
  }, []);

  async function handleDeleteAtividade(id) {
    try {
      await api.delete(`tarefas/${id}`);

      setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    } catch (err) {
      alert('Erro ao deletar a atividade, tente novamente.');
    }
  }



  return (
    <div className="cover-container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="container-hearder d-flex">
        <span>Bem vindo!</span>

        <Link className="btn btn-lg btn-secondary ml-auto display btn btn-dark" to="/register">Cadastrar novo caso</Link>
        <Link className="back-link btn btn-lg btn-secondary mx-1 display btn btn-dark" to="/atividades">
            <FiArrowLeft size={16} color="#e02041"/>
              
          </Link>
      </header>
      <main role="main">

        <section className="jumbotron text-center p-1">
          <div className="container">
            <h1 className="jumbotron-heading text-dark">Atividades Cadastradas</h1>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container w-100 align-items-center">
            <div className="row">
              {tarefas.map(tarefa => (
                <div className="col-md-5">
                  <div className="card mb-3 shadow-lg">
                    <strong className="text-dark">ATIVIDADE:</strong>
                    <p className="text-dark">{tarefa.atividade}</p>

                    <strong className="card-text text-dark">DESCRIÇÃO:</strong>
                    <p className="text-dark">{tarefa.description}</p>

                    <div onChange= {e => setTempo(e.target.value)} id="cron" className="text-center text-dark">
                      <Cronometro />
                    </div>
                 


                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group w-100">
                        <button onClick={() => start()} type="button" className="btn btn-sm btn-outline-secondary">Start</button>
                        <button onClick={() => stop()} type="button" className="btn btn-sm btn-outline-secondary">Parar</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Conclusão</button>
                        <button onClick={() => handleDeleteAtividade(tarefa.id)} type="button" className="btn btn-sm btn-outline-secondary">Excluir</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div >
  );

}