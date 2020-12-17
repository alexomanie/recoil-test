import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useRecoilState } from 'recoil'
import { counterState } from './state/atoms'

function App() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div className="App">
      <header className="App-header">
        <div>My Todos</div>
      </header>
    </div>
  )
}

export default App
