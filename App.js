import React from 'react'
import Forms from './Forms'
import Register from './Register'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
                <Route exact path="/forms">
                <Forms/>
                </Route>
                <Route exact path="/register">
                <Register/>
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default App
