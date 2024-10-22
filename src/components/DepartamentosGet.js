import React, { Component } from 'react'
import loadingImage from '../assets/images/loading.jpg'
import axios from 'axios'
import Global from '../Global'

export default class DepartamentosGet extends Component {


    state = {
        departamento: null
    }

    getDepartamento = () => {
        let request = 'api/Departamentos/' + this.props.id
    
        axios.get(Global.apiDepartamentos + request).then(response => {
            this.setState({
                departamento: response.data
            })
        })
      }

      componentDidMount = () => {
        this.getDepartamento();
      }

  render() {
    return (
      <div>
        <h1>DEPARTAMENTO {this.props.id}</h1>

        {
            this.state.departamento ?
            (
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Número: {this.state.departamento.numero}</li>
                    <li class="list-group-item">Nombre: {this.state.departamento.nombre}</li>
                    <li class="list-group-item">Localidad: {this.state.departamento.localidad}</li>
                </ul>
            ):
            (
                <img src={loadingImage} alt="loading" />
            )
        }
      </div>
    )
  }
}
