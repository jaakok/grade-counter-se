import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Front from './components/Front'
import VocForm from './components/vocational/vocForm'
import HSForm from './components/highSchool/hsForm'

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/todistusvalinnan-pistelaskuri/ylioppilas/'>Studentexamen</Link>
            </li>
            <li>
              <Link to='/todistusvalinnan-pistelaskuri/ammatillinen/'>Yrkesinriktad grundexamen</Link>
            </li>
          </ul>
        </nav>
        <Route path='/todistusvalinnan-pistelaskuri/' exact component={Front} />
        <Route path='/todistusvalinnan-pistelaskuri/ammatillinen/' render={(props) => <VocForm {...props}/> }/>
        <Route path='/todistusvalinnan-pistelaskuri/ylioppilas/' render={(props) => <HSForm {...props}/> }/>
      </div>
    </Router>
  )
}

export default App;
