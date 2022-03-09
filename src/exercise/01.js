// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "action" - a function that returns the new value of state OR object with new state
// function countReducer(state, action) {
//   // returns new value of state
//   return {
//     ...state,
//     ...(typeof action === 'function' ? action(state) : action)
//   }
// }

// make it work like redux
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`Unsuppored action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 2}) {
  // use dispatch like redux
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
