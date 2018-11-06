import React from "react";
import "./Form.css";

export const FormBtn = props => (
  <button {...props} className="btn btn-lg btn-success input-lg">
    {props.children || "Search"} 
  </button>
);
