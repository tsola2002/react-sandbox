import React, { Component } from 'react'
import First from './First';
import Second from './Second';

class MyNamespace extends Component {
  render() {
    return (
      <section>{this.props.children}</section>
    );
  }
}

MyNamespace.First = First;
MyNamespace.Second = Second;

export default MyNamespace;
export { First, Second };
