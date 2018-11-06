import React from "react";
import "./Form.css";

export const Input = props => (
  <div className="input-group input-group-lg">
    <input className="form-control" type="text" {...props} />
  </div>
);
