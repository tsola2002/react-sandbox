import React, { Component } from 'react'

const enabled = false;

class MyButton extends Component {



  render() {
    return (
      <button disabled={!enabled}>{this.props.children}</button>
    );
  }
}

export default  MyButton;
