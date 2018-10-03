import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render() {
    let classComponent = 'button'

    if(this.props.type === 'success') {
      classComponent += ' button-success'
    }

    if(this.props.round) {
      classComponent += ' button-round'
    }

    return (
      <button className={classComponent}>
        { this.props.children }
      </button>
    )
  }
}

export default Button