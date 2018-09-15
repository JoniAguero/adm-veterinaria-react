import React, { Component } from 'react'

export class Cita extends Component {

  render() {

    const { fechaRef, horaRef, montoDuenioRef, nombreMascotaRef, sintomasRef} = this.props.info;
    
    return (
      <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{nombreMascotaRef}</h3>
          <p className="card-text"><span> Nombre dueño: </span>{montoDuenioRef}</p>
          <p className="card-text"><span> Fecha: </span>{fechaRef}</p>
          <p className="card-text"><span> Hora: </span>{horaRef}</p>
                <p className="card-text"><span> Sintomas: </span> <br />
            {sintomasRef}
                </p>
            </div>
        <div className="row">
          <div className="col-sm-3">
            <button type="submit" className="btn btn-danger" onClick={ () => this.props.borrarCita(this.props.idCita) } >Borrar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Cita;
