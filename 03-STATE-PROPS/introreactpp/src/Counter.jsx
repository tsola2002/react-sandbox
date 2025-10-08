import React, { Component } from 'react'

export default class Counter extends Component {
    //this code will create a component state
    constructor(props){
        super(props);      
        // this will create the initial component state
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    // function to update the state
    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

  render() {
    return (
        <div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.increment}>Increase</button>
        </div>
    )
  }
}
