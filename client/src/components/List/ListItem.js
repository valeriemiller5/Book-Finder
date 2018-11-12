import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom"
import "./ListItem.css";

export const ListItem = props => (
  <li className="list-group-item">
    <div className="card-deck">
        <div className="card">
            <div className="form horiz">
            <img className="coverImage" alt="coverimage" src={props.image || 'https://placehold.it/300x300'} />
            <Link to={"/books/" + props.id}>
                <Button className="btn btn-default saveBtn" onClick={props.click}>{props.buttonName}</Button>
            </Link>
                <a className="btn btn-info infoBtn" role="button" href={props.link} target="_blank">Book Info</a>
            </div>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-title"> {props.author}</h6>
            <p className="card-text"> {props.description || "No description available for this title"}</p>
            </div>
        </div>
    </div>
  </li>
);
