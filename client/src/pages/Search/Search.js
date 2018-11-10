import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
// import { Link } from "react-router-dom"
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import { BookList, EachBook } from "../../components/BookList";
// import { stringify } from "querystring";


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
    }
    
    handleSubmitBook = event => {
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
            .then(res => 
                this.setState({ 
                    books: res.data.items},
                    console.log(res.data.items)))
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
                                            <FormBtn 
                                                onClick={this.handleSubmitBook}
                                            />
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
                                {this.state.books.forEach(book => console.log(book))}
                                    {/* <EachBook 
                                        key={book.id}
                                        title={book.volumeInfo.title}
                                        description={book.volumeInfo.description}
                                        href={book.volumeInfo.infoLink}
                                    />
                                ))} */}
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