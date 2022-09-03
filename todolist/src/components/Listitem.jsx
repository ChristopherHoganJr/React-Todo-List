import React from "react";

const Listitem = (props) => {
  return (
    <fieldset>
      <legend>List Item</legend>
      {props.itemCheck ? (
        <li>
          <strike>{props.itemText}</strike>
          <input
            type='checkbox'
            checked={props.itemCheck}
            onChange={() => props.checkItem(props.index)}
          />
          <button onClick={() => props.deleteItem(props.index)}>Delete</button>
        </li>
      ) : (
        <li>
          {props.itemText}
          <input
            type='checkbox'
            checked={props.itemCheck}
            onChange={() => props.checkItem(props.index)}
          />
          <button onClick={() => props.deleteItem(props.index)}>Delete</button>
        </li>
      )}
    </fieldset>
  );
};

export default Listitem;
