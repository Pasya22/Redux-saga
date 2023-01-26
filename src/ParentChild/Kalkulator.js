import React, { Component,useState } from 'react';
import FunctionalComponent from '../LatihanKomponen/FunctionalComponent'
class Multiplication extends Component {
    constructor(props) {
      super(props);
      this.state = {
        num1: 0,
        num2: 0,
        result: 0
      }
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleClick = () => {
      const { num1, num2 } = this.state;
      this.setState({
        result: num1 * num2
      });
    }
  
    render() {
      return (
        <div>
          <input type="number" name="num1" onChange={this.handleChange} />
          <input type="number" name="num2" onChange={this.handleChange} />
          <button onClick={this.handleClick}>Multiply</button>
          <p>Result: {this.state.result}</p>
        </div>
      );
    }
  }
export default Multiplication
