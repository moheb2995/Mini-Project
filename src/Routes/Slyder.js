import React from "react";
import { useState } from "react/cjs/react.development";
import img1 from './image/1234.jpeg'
import img2 from './image/canada.jpg'
import img3 from './image/Sky_Zero.jpg'

const images = [
  {
    img : img1
  },
  {
    img : img2
  },
  {
    img : img3
  },
]

const Slyder =()=>{
  const [current,setCurrent] = useState(1)

  const length = images.length

  function nextSlide(){
    setCurrent(current === length - 1 ? 0 : current + 1)
    console.log(current);
  }
  function pervSlide(){
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current);
  }

return(
  <div>
    {
      images.map((item,i)=><img src={item.img} key={i} className={i===current ? 'block' :'none'}/>)
    }
    <div>
      <button onClick={nextSlide}> {">"} </button>
      <button onClick={pervSlide}> {"<"} </button>
    </div>
  </div>
)
}
export default Slyder