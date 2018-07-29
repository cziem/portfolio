import React from "react";

const EditPageExpensePage = props => {
  console.log(props);
  return <div>Editing the expense with an id of {props.match.params.id}</div>;
};

export default EditPageExpensePage;
