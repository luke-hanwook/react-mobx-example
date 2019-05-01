import React, { Component } from "react";
import { inject, observer } from "mobx-react";

const Pokemon = props => {
  const { id, name, height, weight } = props.pokemon;
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{height}</div>
      <div>{weight}</div>
    </>
  );
};

@inject("fifth")
@observer
class FifthContainer extends Component {
  componentDidMount() {
    this.props.fifth.loadPokemon(1);
  }
  render() {
    const { pokemon } = this.props.fifth;
    return <Pokemon pokemon={pokemon} />;
  }
}

export default FifthContainer;
