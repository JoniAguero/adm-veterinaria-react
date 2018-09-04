import React, { Component } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div class="row">
            <div class="col">
              <Formulario />
            </div>
            <div class="col">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
