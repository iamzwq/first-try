import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  useEffect(() => {
    console.log('useEffect=>您来了Index页面')
    // return () => {
    //   console.log('你离开了Index页面')
    // }
  }, [])
  return <h2>Index</h2>
}

function List () {
  useEffect(() => {
    console.log('useEffect=>您来了List页面')
  })
  return <h2>List</h2>
}

export default function App () {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`useEffect=>You click ${count} times`)
    return () => {
      console.log('======')
    }
  }, [])
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>Click me</button>

      <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/List'>列表</Link></li>
        </ul>

        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  )
}