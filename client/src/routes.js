import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './components/dashboard'
const IndexPage = () => {

    return <div>Welcome to Scrum Master<br/><a href="/story/1">Homepage</a></div>
}
const NotFoundPage = () => {

    return <div><h2>Not Found</h2><br/><a href="/story/1">Homepage</a></div>
}
export default(
    <Route>
        <Route path='/story/:id' exact component={App}/>
        <IndexRoute component={IndexPage} />
        <Route path='*' exact component={NotFoundPage}/>
    </Route>
)