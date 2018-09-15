import React, { Component } from 'react'
import { Cita } from './Cita';

export class ListarCitas extends Component {
  render() {
    return (
      <div>
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center"> Administra tus citas aquí </h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita key={cita}
                                  idCita={cita} 
                                  info={this.props.citas[cita]} 
                                  borrarCita={this.props.borrarCita}/>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default ListarCitas;
