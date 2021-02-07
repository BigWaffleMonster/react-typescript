import React, {useState, useEffect} from 'react'
import {NavBar} from './components/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TodosPage} from './Pges/TodosPage'
import {AboutPage} from './Pges/AboutPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route component={TodosPage} path="/" exact/>
            <Route component={AboutPage} path="/about" exact/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
