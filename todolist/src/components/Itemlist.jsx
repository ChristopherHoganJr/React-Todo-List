import React from "react";

// components
import Listitem from "./Listitem";

const Itemlist = (props) => {
  return (
    <fieldset>
      <legend>Item List</legend>
      <ul>
        {props.todolist.map((e, idxF) => (
          <Listitem
            key={idxF}
            index={idxF}
            itemText={e.itemText}
            itemCheck={e.checkbox}
            deleteItem={props.deleteItem}
            checkItem={props.checkItem}
          />
        ))}
      </ul>
    </fieldset>
  );
};

export default Itemlist;
