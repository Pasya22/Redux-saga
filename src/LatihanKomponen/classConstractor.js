import React, { Component } from 'react'
class FrontEnd2 extends Component {

    constructor(props) {
        super(props);
        this.state = {Counter:0 }
        this.increment = this.increment.bind(this)
        this.dicrement = this.dicrement.bind(this)
    }
    increment() {
        this.setState({Counter:this.state.Counter+1})    
     }
     dicrement(){
         this.setState({Counter:this.state.Counter-1})
     }
    render() { 
        return (
            <div>
            <h2>Perhitungan</h2>
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
 
export default FrontEnd2;