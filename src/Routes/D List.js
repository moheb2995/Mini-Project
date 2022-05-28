import React, { useState } from "react";

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`
const getRandomColumn = () => Math.round(Math.random()) + 1

const DList =()=>{
const [txt,settxt] = useState('')
const [arr,setarr] = useState([
  {
    txt : 'M.K.M.2',
    _id : UID(),
    col : 1,
    select : false,
    update : new Date().getTime()
  },
  {
    txt : 'M.N.M.3',
    _id : UID(),
    col : 2,
    select : false,
    update : new Date().getTime()
  },
])

const add =()=>{
  if(!txt)return alert('بنویس')
  const clonarr = [...arr]
  clonarr.push({
    txt,
    _id : UID(),
    col : getRandomColumn(),
    select : false,
    update : new Date().getTime()
  },)
  setarr(clonarr)
  console.log(arr);
  settxt("")
}

const filterShow1 =[...arr].filter((ar)=> ar.col == 1)
const filterShow2 =[...arr].filter((ar)=> ar.col == 2)

const filterMove1 = [...arr].filter((ar)=>ar.col == 1 && ar.select).map(item => item._id)
const filterMove2 = [...arr].filter((ar)=>ar.col == 2 && ar.select).map(item => item._id)

const filterDelete= [...arr].filter((ar)=>ar.select).map(item => item._id)

const clone = [...arr]


const getIDofSelectedItems =id=> clone.findIndex(item => item._id == id)

return(
<div className="ma">
  <div>
  <h1>D List</h1>
  <br/>
  <input value={txt} onChange={(e)=>settxt(e.target.value)}/>
  <button onClick={add}> add </button>
  <br/>
  </div>
  <h2>list 1</h2>
  <div>
    {
      filterShow1.map((item,i)=><div 
      key={item._id}
      style={{background: item.select ? 'blue' : 'none', color: item.select ? '#fff': '#000'}}

      onClick={() => {
        const p = getIDofSelectedItems(item._id)
        clone[p].select = !clone[p].select
        setarr(clone)
      }}
      >
      {item.txt} <br/> {item.select} </div>)
    }
  </div>

  <h2>list 2</h2>
  <div>
    {
      filterShow2.map((item,i)=><div 
      key={item._id}
      style={{background: item.select ? 'blue' : 'none', color: item.select ? '#fff': '#000'}}
      onClick={() => {
        const p = getIDofSelectedItems(item._id)
        clone[p].select = !clone[p].select
        setarr(clone)
      }}
      >{item.txt} <br/> {item.select} </div>)
    }
  </div>

  <button onClick={()=>{
  filterMove2.map((_id)=>{
    const p = getIDofSelectedItems(_id)
    clone[p].col = 1 
    clone[p].select = false 
  })
  setarr(clone)
  }}
  >move top</button>

  <button onClick={()=>{
     filterMove1.map((_id)=>{
      const p = getIDofSelectedItems(_id)
      clone[p].col = 2
      clone[p].select = false 
     })
   setarr(clone)
  }}
  >move bottom</button>

  <button onClick={()=>{
    filterDelete.map(_id =>{
      const p = getIDofSelectedItems(_id)
      console.log(p);
      clone.splice(p,1) 
    })
    setarr(clone)
  }}>delete</button> 
</div> 
)}
export default DList