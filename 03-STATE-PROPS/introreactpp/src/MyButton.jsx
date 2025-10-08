import React, { Component } from 'react'

export default class MyButton extends Component {
    // CREATING OUR DEFAULT PROPS
    static defaultProps = {
        disabled: false,
        text: 'My Button'
    };

  render() {
    // DESTRUCTURING OUR PROPS
    const { disabled, text } = this.props;

    return (
      <button disabled={disabled}>{text}</button>
    );
  }
}
