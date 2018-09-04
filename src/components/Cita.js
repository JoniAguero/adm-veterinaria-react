import React, { Component } from 'react'

export class Cita extends Component {
  render() {
      console.log(this.props.info);
      
      const {fecha, hora, duenio, mascota, sintomas} = this.props.info;
    return (
      <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{mascota}</h3>
                <p className="card-text"><span> Nombre dueño: </span>{duenio}</p>
                <p className="card-text"><span> Fecha: </span>{fecha}</p>
                <p className="card-text"><span> Hora: </span>{hora}</p>
                <p className="card-text"><span> Sintomas: </span> <br />
                    {sintomas}
                </p>
            </div>
      </div>
    )
  }
}

export default Cita
