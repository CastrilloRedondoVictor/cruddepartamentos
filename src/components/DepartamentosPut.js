import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class DepartamentosPut extends Component {

    inpNumero = React.createRef();
    inpNombre = React.createRef();
    inpLocalidad = React.createRef();


  state = {
    creado: false
  }

  getDepartamento = () => {
    let request = 'api/Departamentos/' + this.props.id

    axios.get(Global.apiDepartamentos + request).then(response => {
        this.inpNumero.current.value = response.data.numero
        this.inpNombre.current.value = response.data.nombre
        this.inpLocalidad.current.value = response.data.localidad
    })
  }




  componentDidMount = () => {
    
    this.getDepartamento()
    this.setState({
      creado: false
    })
  }



  editarDepartamento = (e) => {
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

    axios.put(Global.apiDepartamentos + request, data).then(response => {
      this.setState({
        creado: true
      })
    })
  }

  render() {
    return (
      <div>
        <h1>EDITAR DEPARTAMENTO {this.props.id}</h1>

        <form onSubmit={this.editarDepartamento}>

          <div className="m-3 w-25">
            <label className="form-label">NÚMERO</label>
            <input disabled type="number" className="form-control" ref={this.inpNumero} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">NOMBRE</label>
            <input type="text" className="form-control" ref={this.inpNombre} />
          </div>

          <div className="m-3 w-25">
            <label className="form-label">LOCALIDAD</label>
            <input type="text" className="form-control" ref={this.inpLocalidad} />
          </div>

          <button type="submit" className="btn btn-primary m-3 w-25">EDITAR</button>

        </form>

        {
          this.state.creado &&
          (<Navigate to='/' />)
        }
      </div>
    )
  }
}
