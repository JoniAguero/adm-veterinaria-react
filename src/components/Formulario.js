import React, { Component } from 'react'

export class Formulario extends Component {

    nombreMascotaRef = React.createRef();
    montoDuenioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    agregarCita = (e) => {

        e.preventDefault();

        const CITA = {
            nombreMascotaRef: this.nombreMascotaRef.current.value,
            montoDuenioRef: this.montoDuenioRef.current.value,
            fechaRef: this.fechaRef.current.value,
            horaRef: this.horaRef.current.value,
            sintomasRef: this.sintomasRef.current.value
        }

        this.props.agregarCita(CITA);

        e.currentTarget.reset();

    }

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                    <form onSubmit={this.agregarCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Mascota" 
                                ref={this.nombreMascotaRef} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" ref={this.montoDuenioRef} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" ref={this.fechaRef} />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" ref={this.horaRef} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" ref={this.sintomasRef} ></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Formulario;
