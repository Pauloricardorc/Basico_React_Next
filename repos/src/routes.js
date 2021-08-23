import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import Repositorio from './pages/Repositorio'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repositorio/:repositorio" exact component={Repositorio} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router