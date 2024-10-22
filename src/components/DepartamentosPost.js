import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class DepartamentosPost extends Component {

    inpNumero = React.createRef();
    inpNombre = React.createRef();
    inpLocalidad = React.createRef();


  state = {
    creado: false
  }




  componentDidMount = () => {
    this.setState({
      creado: false
    })
  }



  nuevoDepartamento = (e) => {
    e.preventDefault();

    let numero = parseInt(this.inpNumero.current.value)
    let nombre = this.inpNombre.current.value
    let localidad = this.inpLocalidad.current.value

    let data = {
      numero: numero,
      nombre: nombre,
      localidad: localidad,
    }

    let request = 'api/Departamentos'

    axios.post(Global.apiDepartamentos + request, data).then(response => {
      this.setState({
        creado: true
      })
    })
  }


  render() {
    return (
      <div>
        <h1>AÑADIR DEPARTAMENTO</h1>

        <form onSubmit={this.nuevoDepartamento}>

          <div className="m-3 w-25">
            <label className="form-label">NÚMERO</label>
            <input type="number" className="form-control" ref={this.inpNumero} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">NOMBRE</label>
            <input type="text" className="form-control" ref={this.inpNombre} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">LOCALIDAD</label>
            <input type="text" className="form-control" ref={this.inpLocalidad} />
          </div>

          <button type="submit" className="btn btn-primary m-3 w-25">AÑADIR</button>

        </form>

        {
          this.state.creado &&
          (<Navigate to='/' />)
        }
      </div>
    )
  }
}
