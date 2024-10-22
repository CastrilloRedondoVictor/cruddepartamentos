import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default class DepartamentosDelete extends Component {


    state = {
        redirect: false
    };


    deleteDepartamento = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
            if (result.isConfirmed) {
                let request = 'api/Departamentos/' + this.props.id;

                axios.delete(Global.apiDepartamentos + request)
                    .then(response => {
                        this.setState({
                            redirect: true
                        });
                        Swal.fire(
                            '¡Borrado!',
                            'El departamento ha sido borrado.',
                            'success'
                        );
                    })
                    .catch(error => {
                        console.error("Error eliminando el departamento: ", error);
                    });
            } else {
                this.setState({
                    redirect: true
                });
                Swal.fire(
                    '¡Cancelado!',
                    'El departamento no ha sido borrado.',
                    'error'
                );
            }
        });
    }

    componentDidMount = () => {
        this.deleteDepartamento()
    }

  render() {

    if (this.state.redirect) {
        return <Navigate to="/" />
    }

    return (
      <div>
      </div>
    )
  }
}
