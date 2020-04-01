import React, {useState} from 'react';
import { FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './register.css';

export default function Register() {
  const [atividade, setAtividade] = useState('');
  const [description, setDescription] = useState('');
  const [tempo, setTempo] = useState('00:00:00');
  
  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    
    const data = {
      atividade,
      description,
      tempo
    };

    try{
      const response = await api.post('tarefas', data)

      alert(`A atividade ${response.data.atividade} foi cadastrada com sucesso!`);
      history.push('/atividades');
    
    } catch (err){
      alert('Erro no cadastro! Tente novamente.');
    }

    
  }



  return (
    <div className="cover-container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">
      
      <header className="container-hearder d-flex">
        <span>Cadastro de Tarefas</span>

        <Link className="back-link btn btn-lg btn-secondary ml-auto display btn btn-dark" to="/atividades">
            <FiArrowLeft size={16} color="#e02041"/>
              
          </Link>
        
      </header>
        <div className="container">
          <form onSubmit={handleRegister}>
            <div class="form-group">
              <label for="formGroupExampleInput">Atividade</label>
              <input type="text" 
                class="form-control" 
                value={atividade}
                onChange={e => setAtividade(e.target.value)} 
                id="formGroupExampleInput" 
                placeholder="Digite aqui o nome da atividade" />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Descrição</label>
              <textarea 
              value={description}
              onChange={e => setDescription(e.target.value)} 
              placeholder="Digite aqui a descrição" />
            </div>
            <div className="form-group text-center">
              <button className="btn btn-lg btn-secondary ml-auto display btn btn-dark" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
    </div>
    
  );
}