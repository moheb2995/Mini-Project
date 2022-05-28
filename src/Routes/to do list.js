import React from "react";
import { useState } from "react/cjs/react.development";

const ChengeText =()=>{

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const [text,setText] = useState('abc')
const [number,setNumber] =useState(0)
const num = parseInt(number)

// if(!text || isNaN(num))return alert('بنویس')

const getIndexChar =(char)=> array.findIndex(item=>char.toLowerCase()===item)
const checkAlphaBeta =(char)=> char.toLowerCase() !== char.toUpperCase()

const getCharByIndex = (i,isUpperCase) =>{
  const char = array[i]
  console.log(i);
  console.log(isUpperCase);
  return isUpperCase ? char.toUpperCase() : char.toLowerCase()
}

const clickME =()=>{
if(!checkAlphaBeta(text))return text //text?
const change = text.split('').map(text=>{
  const isUpperCace = text ===text.toUpperCase()
  const oldCharIndex = getIndexChar(text)
  const modOf26 = (oldCharIndex + num) % 26
  const newCharIndex = modOf26 < 0 ? modOf26 + 26 : modOf26
  return getCharByIndex(newCharIndex, isUpperCace)
}).join('')
setText(change)
}

return(
<div className="ma ">
  <input value={text} onChange={(e)=>setText(e.target.value)}/>
  <input value={number} onChange={(e)=>setNumber(e.target.value)} type='number'/>
  <button onClick={clickME}>clickME</button>
  <h2>{text}</h2>
  </div>
)
}
export default ChengeText