import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";

class Search extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h1>Book Search</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default Search;