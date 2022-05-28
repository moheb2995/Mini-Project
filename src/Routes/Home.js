import React, { useState } from "react";

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      days : 0,
      h : 0,
      min : 0,
      s : 0,
    }
  }

  componentDidMount(){
    setInterval(()=>{
      const interSpace = new Date('July 11 ,2022 10:09:00').getTime() - new Date().getTime()
      let days = Math.floor(interSpace / (1000 * 60 * 60 * 24))
      let h = Math.floor((interSpace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let min = Math.floor((interSpace % (1000 * 60 * 60)) / (1000 * 60))
      let s = Math.floor((interSpace % (1000 * 60 )) / (1000 ))
      // console.log(min);
      // console.log(s);
      this.setState({days : days})
      this.setState({h : h})
      this.setState({min : min})
      this.setState({s : s})

    })
  }

render(){
  return(
  <div className="ma">
    <h1 >welcome to our Home</h1>
    <h2>{this.state.days}:{this.state.h}:{this.state.min}:{this.state.s} </h2>
    
    
  </div>
  )
}
}

export default Home