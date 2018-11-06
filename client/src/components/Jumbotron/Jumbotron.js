import React from "react";
import "./Jumbotron.css"

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <h1>Google Book Search</h1>
        {props.message}
    </div>
);

export default Jumbotron;