import React, { useState } from 'react'

const Task = () => {
  const [input,setinput] = useState('')
  const x = ['a','b','c','d','e','f','g','h']
  const y = [1,2,3,4,5,6,7,8]
  const [m1,setm1] = useState('')
  const [m2,setm2] = useState('')
  const [m3,setm3] = useState('')
  const [m4,setm4] = useState('')
  const [m5,setm5] = useState('')
  const [m6,setm6] = useState('')
  const [m7,setm7] = useState('')
  const [m8,setm8] = useState('')


  function data(){
    const c = input.split('')
    console.log(c);
    const f1 = x.findIndex(i=>i==c[0])
    const r1 = f1 + 1
    const r2 = f1 + 2
    
    const l1 = f1 - 1
    const l2 = f1 - 2
    
    const f2 = y.findIndex(i=>i==c[1])
    const t1 = f2 + 1
    const t2 = f2 + 2

    const b1 = f2 - 1
    const b2 = f2 - 2
    
    if(x[r1] && y[t2]) setm1(`${x[r1]} ${y[t2]}`) //+2y +x
    else(setm1(undefined))
    if(x[r2] && y[t1]) setm2(`${x[r2]} ${y[t1]}`) //+y +2x
    else(setm2(undefined))
    if(x[r2] && y[b1]) setm3(`${x[r2]} ${y[b1]}`) //-y +2x
    else(setm3(undefined))
    if(x[r1] && y[b2]) setm4(`${x[r1]} ${y[b2]}`) //+y +x
    else(setm4(undefined))
    if(x[l1] && y[b2]) setm5(`${x[l1]} ${y[b2]}`) //+y -x
    else(setm5(undefined))
    if(x[l2] && y[b1]) setm6(`${x[l2]} ${y[b1]}`) //-y -2x 
    else(setm6(undefined))
    if(x[l2] && y[t1]) setm7(`${x[l2]} ${y[t1]}`) //+y -2x kkk
    else(setm7(undefined))
    if(x[l1] && y[t2]) setm8(`${x[l1]} ${y[t2]}`) //+2y -x
    else(setm8(undefined))
  }

return (
<div className='ma'>
  <h1>Horse movement</h1>
  <input value={input} onChange={e=>setinput(e.target.value)} />
  <div>
    {m1? <p className="">{m1} ,</p> : ''}
    {m2? <p className="">{m2} ,</p> : ''}
    {m3? <p className="">{m3} ,</p> : ''}
    {m4? <p className="">{m4} ,</p> : ''}
    {m5? <p className="">{m5} ,</p> : ''}
    {m6? <p className="">{m6} ,</p> : ''}
    {m7? <p className="">{m7} ,</p> : ''}
    {m8? <p className="">{m8} ,</p> : ''}
  </div>
  <button onClick={data}>Move</button>
</div>
)
}
export default Task