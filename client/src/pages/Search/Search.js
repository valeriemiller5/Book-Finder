import React, { Component } from "react";
import "./Search.css"
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import { BookList } from "../../components/BookList";
// import { Link } from "react-router-dom"


class Search extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmitBook = event => {
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
        .then(res => {
            console.log(res.data.items);
            this.setState({ books: res.data.items });
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron
                    message="Search for Books"
                />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input 
                                                name="bookSearch"
                                                value={this.state.bookSearch}
                                                onChange={this.handleInput}
                                                placeholder="Search for book by title"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <FormBtn onClick={this.handleSubmitBook}></FormBtn>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <br></br>
                    <Container>
                    <Row>
                        <Col size="xs-12">
                            <BookList>
                            <h4>Search Results:</h4>
                                {this.state.books.map(book => (
                                    <li key={book.id}>
                                        <div className="card-deck">
                                            <div className="card">
                                                <div className="form horiz">
                                                <img className="coverImage" alt="coverimage" src={book.volumeInfo.imageLinks.thumbnail} />
                                                    <button className="btn btn-default saveBtn">Save Book</button>
                                                    <a className="btn btn-default infoBtn" href={book.volumeInfo.infoLink} target="_blank">Book Info</a>
                                                </div>
                                                <div className="card-body">
                                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                                <h6 className="card-title">By: {book.volumeInfo.authors}</h6>
                                                <p className="card-text">{book.volumeInfo.description || "No description available for this title"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li> 
                                ))}
                            </BookList>
                        </Col>
                    </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Search;