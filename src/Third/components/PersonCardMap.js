import React, { Component, Fragment } from 'react';
import PersonCardList from './PersonCardList'

class PersonCardMap extends Component {
  renderMap = () => {
    const { personMap } = this.props
    let returnArr = [];
    personMap.forEach((v, k) => {
      returnArr = returnArr.concat(
        <Fragment key={k}>
          <div>*{k}팀</div>
          <PersonCardList personList={v}/>
        </Fragment>
      )
    });
    return returnArr;
  }

  render() {
    return (
      <Fragment>
        {this.renderMap()}
      </Fragment>
    );
  }
};

export default PersonCardMap;