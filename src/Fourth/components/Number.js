import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import PresentationalComponent from './PresentationalComponent'

@inject('fourth')
@observer
class Number extends Component {

  handleChange = (e) => {
    const { fourth } = this.props
    fourth.setNumber(e.target.value)
  }

  render() {
    const { number, multiple } = this.props.fourth

    return (
      <div>
        <span>number : </span>
        <PresentationalComponent number={number}/>
        <span>Math.pow : </span>
        <PresentationalComponent number={multiple}/>
        <input type="number" onChange={this.handleChange} value={number}/>
      </div>
    );
  }
}

export default Number;