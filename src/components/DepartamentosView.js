import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'
import loadingImage from '../assets/images/loading.jpg'
// import loadingGif from '../assets/gifs/Animation - 1729587840035.gif'
import { NavLink } from 'react-router-dom'

export default class DepartamentosView extends Component {

    state = {
        departamentos: []
    }


    loadDepartamentos = () => {
        let request = 'api/Departamentos'

        axios.get(Global.apiDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data
            })
        })
    }

    // deleteDepartamento = (id) => {
    //     let request = 'api/Departamentos/' + id

    //     axios.delete(Global.apiDepartamentos + request).then(response => {
    //         this.loadDepartamentos();
    //     })
    // }

    componentDidMount = () => {
        this.loadDepartamentos()
    }


  render() {
    return (
      <div>
        <h1>LISTA DE DEPARTAMENTOS</h1>

        {
            this.state.departamentos.length > 0 ?
            (
                <div>
                    <table className="table table-dark table-striped">
                        <thead>
                          <tr>
                            <th scope="col">numero</th>
                            <th scope="col">nombre</th>
                            <th scope="col">localidad</th>
                            <th scope="col">acciones</th>
                            <th scope="col">detalles</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos &&
                                (
                                    this.state.departamentos.map((departamento, index) => {
                                        return(
                                            <tr key={index}>
                                                <th key={index + 1} scope="row">{departamento.numero}</th>
                                                <td key={index + 2}>{departamento.nombre}</td>
                                                <td key={index + 3}>{departamento.localidad}</td>
                                                <td key={index + 4}>
                                                    <a className="m-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-offset-3" href={`/edit/${departamento.numero}`}>EDITAR</a>
                                                    {/* <button onClick={() => {this.deleteDepartamento(departamento.numero)}}>BORRAR</button> */}
                                                    <a className="m-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-offset-3" href={`/delete/${departamento.numero}`}>BORRAR</a>
                                                </td>
                                                <td key={index + 5}>
                                                    <NavLink className="m-3 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-offset-3" to={`/get/${departamento.numero}` }>DETALLES</NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </div>
            ):
            (
                <img src={loadingImage} alt="loading" />
                // <img src={loadingGif} alt="loading" />
            )
        }
      </div>
    )
  }
}
