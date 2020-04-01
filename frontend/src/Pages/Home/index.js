import React from 'react'
import { FaGithub, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './home.css';



export default function Home() {
  return (

    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
      <header className="masthead mb-auto">
        <div className="inner mb-5">
          <h3 className="masthead-brand">Gerenciador de Tarefas</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active mx-4" href="/">Home</a>
            <a className="nav-link mx-4" href="/atividades">Tarefas</a>
            <a className="nav-link mx-1" href="/contato">Contato</a>
          </nav>
        </div>
      </header>

      <main role="main" className="inner cover my-5 text-light">
        <h1 className="cover-heading">Organize suas tarefas.</h1>
        <p className="lead text-light">Crie e edite suas tarefas.</p>
        <p className="lead">
          <a href="/register" className="btn btn-lg btn-secondary">Criar Tarefa</a>
        </p>
      </main>

      
        <p className="contato btn-lg">
          <a href="https://github.com/pecinn">
            <FaGithub />
          </a>
          <a href="mailto:jfelipe7.souza@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/jfsouza7">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/JoaoooFelipe">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/jfelipe7/">
            <FaLinkedin />
          </a>
        </p>
      
    </div>

  );
}