import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateState from './CreateState'
import Counter from './Counter'
import MyButton from './MyButton'
import { Component } from 'react'

class App extends Component {

  constructor(props){
        super(props);
        //initial state
        // this will create the component state
        this.state = {
            btnDisabled: false,
            btnText: "Click Me"
        };
    }
  componentDidMount(){
    // after 3 seconds update the state
    setTimeout(() => {
            this.setState({
                btnDisabled: true,
                btnText: "I' ve been Updated"
            });
    }, 3000);
  }
  
  render(){
    return (
      <>
        {/* <CreateState /> */}
        {/* <Counter /> */}
        <MyButton disabled={this.state.btnDisabled} text={this.state.btnText} />
      </>
    );
  }
}

export default App
