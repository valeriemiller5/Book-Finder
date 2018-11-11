import React from "react";

export const ListItem = props => {
    <div class="card-deck">
        <div class="card">
            <div class="form horiz">
              <img class="card-img-top" src={props.imageLink} style="width: 300px; height: 180px" alt="Card image cap" />
                  <button class="btn btn-default saveBtn" style="margin-left: 20%; background-color: violet; color: white">Save Book</button>
            </div>
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.description}</p>
              <a class="card-text-link" href={props.href}>Click Here for Full Story</a>
            </div>
        </div>
    </div>
};
