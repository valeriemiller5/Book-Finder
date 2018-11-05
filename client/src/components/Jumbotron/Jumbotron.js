import React from "react";

const Jumbotron = ({ children }) => (
    <div style={{ height: 300, width: "75%", marginLeft: 150, clear: "both", paddingTop: 120, textAlign: "center" }} className="jumbotron jumbotron-fluid">
        {children}
    </div>
);

export default Jumbotron;