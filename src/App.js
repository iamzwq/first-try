import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { getRes } from './utils'

export default class App extends PureComponent {
  componentDidMount () {
    getRes()
  }

  render () {
    return (
      <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/List'>列表</Link></li>
        </ul>

        {/* <Route path="/" exact component={}></Route>
        <Route path="/list" component={}></Route> */}
      </Router>
    )
  }
}