import React, { useState } from "react";

// components
import Form from "./Form";
import Itemlist from "./Itemlist";

const Todo = () => {
  // states
  const [todo, setTodo] = useState([]);

  const [itemText, setItemText] = useState("");

  const createItem = (e) => {
    e.preventDefault();
    const newItem = { itemText, checkbox: false };
    setTodo([newItem, ...todo]);
    setItemText("");
  };

  const deleteItem = (idx) => {
    let todoClone = [...todo];
    todoClone.splice(idx, 1);
    setTodo(todoClone);
  };

  const checkItem = (idx) => {
    let todoClone = [...todo];
    let editItem = todo[idx];
    todoClone.splice(idx, 1);
    if (editItem.checkbox === true) {
      editItem.checkbox = false;
      setTodo([editItem, ...todoClone]);
    } else {
      editItem.checkbox = true;
      setTodo([...todoClone, editItem]);
    }
  };

  return (
    <fieldset>
      <legend>Todo List</legend>
      <Form
        createItem={createItem}
        setItemText={setItemText}
        itemText={itemText}
      />
      <Itemlist todolist={todo} deleteItem={deleteItem} checkItem={checkItem} />
    </fieldset>
  );
};

export default Todo;
