import React, { Component } from 'react'
// import {  } from "module";
class FrontEnd extends Component {
    state = { Counter:0 } 
     increment = ()=> {
       this.setState({Counter:this.state.Counter+1})    
    }
    dicrement =()=>{
        this.setState({Counter:this.state.Counter-1})
    }
    render() { 
        return (
            <div>
            <h2>Hllow Gusy</h2>
            <h3>
            Counter:{this.state.Counter}
            </h3>
              <button type='button' onClick={this.increment}>+
             </button>     
              <button type='button' onClick={this.dicrement}>-
             </button>     
            </div>
         );
    }
}
 
export default FrontEnd;