// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
function countReducer(state, newState) {
  // state will get updated to what is returned
  return {...state, ...newState}
}

function Counter({initialCount = 0, step = 2}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
