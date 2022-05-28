import React from "react";
import Select from 'react-select'
import { useState } from "react/cjs/react.development";
const Converter =()=>{
  const [num,setnum] = useState(10)
  const [g ,setg] = useState(null)
  const [kg ,setkg] = useState(null)
  const [oz ,setoz] = useState(null)
  const [lb ,setlb] = useState(null)
  const [t ,sett] = useState(null)
  
  const options = [
    {
      label : 'lb',
      value :{
        lb:1,
        g: 453.59237,
        kg: 0.45359237,
        oz: 16,
        t:.0005
      },
    },
    {
      label : 'g',
      value :{
        lb:0.0022046226,
        g: 1,
        kg: .001,
        oz: .0352739619,
        t: .00000110023
      },  
    },
    {
      label : 'kg',
      value :{
        lb: 2.2046226218,
        g: 1000,
        kg: 1,
        oz:35.2739619496,
        t:.0011023113
      } ,
    },
    {
      label : 'oz',
      value :{
        lb:1,
        g: 28.349523125,
        kg: .028349523125,
        oz:1,
        t:.00003125
      } ,
    },
    {
      label : 't',
      value :{
        lb:2000,
        g: 907184.74,
        kg: 907.18474,
        oz: 32000,
        t:1
      },
    },
  ]

  function value(value) {
    console.log(value);
    setg(num * value.g) 
  }
  
return(
<div className="ma">
  <h1>weight converter</h1>

  <input type="number" value={Number(num)} onChange={e=>setnum(e.target.value)} min={0} />
    <Select options={options} onChange={value} defaultValue={[options[1]]} />

  <div><h4>lb</h4>  <div></div></div>  
  <div><h4>g </h4>  <div>{g}</div></div>
  <div><h4>kg</h4>  <div></div></div>
  <div><h4>oz</h4>  <div></div></div>
  <div><h4>t </h4>  <div></div></div>
</div>
)
}
export default Converter