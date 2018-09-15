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

  borrarCita = (id) => {

    //Creacmos copia de State citas
    const citas = { ...this.state.citas };

    //Eliminados por id
    delete citas[id];

    //Actualizamos state
    this.setState({
      citas 
    })

  }

  componentDidMount() {

    const CitasLS = JSON.parse(localStorage.getItem('citas'));
    if(CitasLS){
      this.setState({
        citas: CitasLS
      })
    }

  }

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
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
              <ListarCitas citas={this.state.citas} 
                borrarCita={this.borrarCita}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
