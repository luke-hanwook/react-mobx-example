import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import PersonCard from './components/PersonCard'
import PersonCardList from './components/PersonCardList'
import PersonCardMap from './components/PersonCardMap'

@inject('third')
@observer
class ThirdContatiner extends Component {
  componentDidMount() {
    const {third} = this.props;
    third.setPersonObj();
    third.setPersonList();
    third.setPersonMap();
  }

  render() {
    const { person, personList, personMap } = this.props.third
    return (
      <Fragment>
        <h3>PERSON</h3>
        <PersonCard person={person}/>
        <hr />
        <h3>PERSON LIST</h3>
        <PersonCardList personList={personList}/>
        <hr />
        <h3>PERSON MAP</h3>
        <PersonCardMap personMap={personMap}/>
        <hr />
      </Fragment>
    );
  }
}

export default ThirdContatiner;
