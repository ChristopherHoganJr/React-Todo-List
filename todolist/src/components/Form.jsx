import React, { useState } from "react";

const Form = (props) => {
  return (
    <fieldset>
      <legend>Form</legend>
      <form onSubmit={props.createItem}>
        <label></label>
        <input
          type='text'
          value={props.itemText}
          onChange={(e) => props.setItemText(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </fieldset>
  );
};

export default Form;
