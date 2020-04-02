import React, {Component} from 'react';

class Cronometro extends Component {
  
  constructor(props) {

    super(props);

    this.state = {
      segundos:0,
      minutos:0,
      horas: 0
    }
  }
  tick() {
    if(this.state.segundos >= 59){
      this.state.minutos = this.state.minutos + 1
      this.state.segundos = -1
    }

    if(this.state.minutos >= 59 && this.state.segundos >=59) {
      this.state.horas = this.state.horas + 1
      this.state.minutos = 0
    }

    this.setState((prevState, props) => ({
      segundos: prevState.segundos + 1
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(
        (prevState, props) => this.tick(),
        1000
        );
  }

    render() {
      
      return(
        <div id="screen">
          <h4>
            {`${this.state.horas} : ${this.state.minutos} : ${this.state.segundos}`}
          </h4>
        </div>
        
      );
    }
}
export default Cronometro;