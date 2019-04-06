import React, { Fragment } from 'react';
import PersonCard from './PersonCard'

const PersonCardList = ({personList}) => (
  <Fragment>
    {
      personList.map(p => (<PersonCard key={p.name} person={p}/>))
    }
  </Fragment>
)

export default PersonCardList;