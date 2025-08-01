import { data } from './data/data';
import { useState } from 'react';
import ImcCalc from "./components/imcCalc";
import ImcTable from "./components/ImcTable";
import "./App.css";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault()
    if(!weight || !height) return
    const weightloat = +weight.replace(",", ".")
    const heightloat = +height.replace(",", ".")

    const imcResult = (weightloat / (heightloat * heightloat)).toFixed(1);
    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
    if (!info) return;
  }

  const resetCalc = (e) => {
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState ("");
  const [info, setInfo] = useState ("");
  const [infoClass, setInfoClass] = useState ("");

  return (
   <div className="container">
    {!imc ? (<ImcCalc calcImc={calcImc}/>) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>)}
   </div>
  )
}

export default App
