import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Output from './components/Output'
import Buttons from './components/Buttons'

function App() {
  let [ans, setans] = useState(0)

  let add = () => {
    let num1 = parseInt(document.querySelector(".a").value);
    let num2 = parseInt(document.querySelector(".b").value);
    setans(num1 + num2);
  }

  let sub = (e) => {
    let num1 = parseInt(document.querySelector(".a").value);
    let num2 = parseInt(document.querySelector(".b").value);
    setans(num1 - num2);
  }

  let mul = (e) => {
    let num1 = parseInt(document.querySelector(".a").value);
    let num2 = parseInt(document.querySelector(".b").value);
    setans(num1 * num2);
  }

  let div = (e) => {
    let num1 = parseInt(document.querySelector(".a").value);
    let num2 = parseInt(document.querySelector(".b").value);
    ans = (num1 / num2).toFixed(2);
    setans(ans);
  }

  return (
    <>
      <Input></Input>

      {/* Used props to pass "ans" as an argument */}
      <Output ans={ans}></Output>

      <Buttons add={add} sub={sub} mul={mul} div={div}></Buttons>
    </>
  )
}

export default App
