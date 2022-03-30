import * as React from 'react'
import {ErrorBoundary} from "react-error-boundary"
import './App.css'

export default function App() {
  return (
    <main>
      <ErrorBoundary FallbackComponent={Fallback} onError={(e) => console.log(e)}>
        <Counter />
      </ErrorBoundary>
    </main>
  )
}

const Fallback = () => <p>Something went wrong!</p>

const Counter = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(count => count + 1)
  if (count > 5){
    throw new Error("Exceeded Limit")
  } 
  return (
      <button onClick={increment}>{count}</button>
  )
}