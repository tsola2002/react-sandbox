import React, { Component } from 'react'

export default class CreateState extends Component {

    // CREATING OUR FIRST STATE
    state = {
        heading: 'React Awesomesauce (Busy)',
        content: 'Loading...'
    };


  render() {

    // DESTRUCTURING OUR STATE
    const { heading, content } = this.state;

    return (
      <div>
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    )
  }
}
