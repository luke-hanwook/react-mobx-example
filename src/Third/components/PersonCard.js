import React from 'react';
import { observer } from 'mobx-react'

const PersonCard = ({person}) => (
  <div>{person.introduce}</div>
)

export default observer(PersonCard);