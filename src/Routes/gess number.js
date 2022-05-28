import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

const GessNumber = () => {

const [num,setnum] = useState(0)
const [chance,setchance] = useState('')
const [gess,setgess] = useState('enter number')
const [random,setra] = useState(null)
const [render,setrender] = useState(false)
const [i,seti] = useState(4)


useEffect(() => {
const random = Math.floor(Math.random() * 99) + 1
setra(random)
}, [render])

console.log(random) 
  const enter =()=>{

  seti(i-1)
  console.log(i)

  const chan = num==random ? 'you win' : i>1 ? `chance ${i}` : i==1 ? 'last chance' : 'you lose'
  setchance(chan)

  const ges = random==num ? `you gess right,your random${num}` : (random<num) ? 'you gessed to high' : 'you gessed to low'
  setgess(ges)
}

return (
  <div className='ma'>
    <h1>gess your number between 1 and 99</h1>
    <p>{chance}</p>
    <p>{gess}</p>
    <input onChange={e=>setnum(e.target.value)} value={num} type="number" readOnly = {i <= 0 ? true : false}/> 
    <button onClick={enter}>enter</button>
    <button onClick={()=> {setrender(true);seti(4)}} className={i <= 0 ? 'block' : 'none'}>try agan</button>
  </div>
)
}
export default GessNumber