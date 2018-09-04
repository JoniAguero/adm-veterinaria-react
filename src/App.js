import React, { Component } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListarCitas } from './components/ListarCitas';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      citas: {}
    }

  }

  agregarCita = (cita) => {
    const citas = { ...this.state.citas };

    citas[`cita${Date.now()}`] = cita;

    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Formulario agregarCita={this.agregarCita} />
            </div>
            <div className="col-md-6">
              <ListarCitas citas={this.state.citas} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
