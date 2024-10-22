import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import Menu from './Menu'
import DepartamentosView from './DepartamentosView'
import DepartamentosPost from './DepartamentosPost'
import DepartamentosPut from './DepartamentosPut'
import DepartamentosGet from './DepartamentosGet'
import DepartamentosDelete from './DepartamentosDelete'


export default class Router extends Component {
  render() {

    function GetIdDepartamentoPut () {
        let {id} = useParams()
        return <DepartamentosPut id={id} />
    }

    function GetIdDepartamentoGet () {
      let {id} = useParams()
      return <DepartamentosGet id={id} />
    }

    function GetIdDepartamentoDelete () {
      let {id} = useParams()
      return <DepartamentosDelete id={id} />
    }

    return (
      <BrowserRouter>
      <Menu />
        <Routes>
            <Route path='/' element={ <DepartamentosView /> } />
            <Route path='/new' element={ <DepartamentosPost /> } />
            <Route path='/edit/:id' element={ <GetIdDepartamentoPut /> } />
            <Route path='/get/:id' element={ <GetIdDepartamentoGet /> } />
            <Route path='/delete/:id' element={ <GetIdDepartamentoDelete /> } />
        </Routes>
      </BrowserRouter>
    )
  }
}
