import React from "react";

const Item = props => {
  console.log(props.match);
  return (
    <div>
      <h2>A thing I've done</h2>
      <p>This page if for the item with id {props.match.params.id}</p>
    </div>
  );
};

export default Item;
