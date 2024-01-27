import { Component } from "react";
import "./App.css";

export default class AppClass extends Component{
  constructor(){
    super();
    this.state={
      message : 'Kalvium Gallery'
    }
  }

  newHeadline(){
    this.setState({
      message : "Scroll Down"
    })
  }
  
  // code here
  render(){
  return(
    <div className='App'>
      <h1 onClick={()=>this.newHeadline()}>{this.state.message}</h1>
      <div className='images'>
        {this.props.image.map((e)=>{
          return <img src= {e.img} alt = 'Elephant Art'/>;
        })}
      </div>
    </div>
  )
  }
}