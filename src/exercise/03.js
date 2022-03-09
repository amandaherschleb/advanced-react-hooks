// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

// cound move CountProvider and useCount to a util and import for reusability
function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props} />
}

// shared function to handle errors
function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used within the CountProvider')
  }

  return context
}

function CountDisplay() {
  // get the count from useContext with the CountContext
  const [count] = useCount()

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // get the setCount from useContext with the CountContext
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
