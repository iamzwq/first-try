import React, { useState, createContext, useContext } from 'react';

const Content = createContext()

function Counter () {
  const count = useContext(Content)
  return <div>{count}</div>
}

function App2 () {
  const [ count, setCount ] = useState(0)
  
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>click me</button>

      <Content.Provider value={count}>
        <Counter />
      </Content.Provider>
    </div>
  )
}

export default App2