import React from 'react'
import {Route , Switch} from 'react-router-dom'
import * as page from './components'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={page.homepage}/>
                <Route path="/compare-cars" component={page.compare}/>
                <Route component={page.notfound}/>
            </Switch>
        </div>
    )
}
