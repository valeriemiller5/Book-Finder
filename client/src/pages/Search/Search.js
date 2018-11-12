import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class Search extends Component {
    state = {
        books: [],
        bookSearch: "",
        title: "", 
        author: "", 
        description: "",
        link: "",
        image: "",
        saved: false
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    loadBooks = () => {
        API.getBooks(this.state.bookSearch)
        .then(res => {
            console.log(res.data.items);
            this.setState({ 
                books: res.data.items, 
                title: "", 
                author: "", 
                description: "", 
                link: "", 
                image: "" 
            });
        })
        .catch(err => console.log(err))
    }

    handleSaveBook = event => {
        event.preventDefault();
        API.saveBook({
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            link: this.state.link,
            image: this.state.image,
            saved: true
        })
        .then(res => {
            console.log("book has been saved")
            this.loadBooks()
        })
        .catch(err => console.log(err));    
    };

    handleSubmitBook = event => {
        event.preventDefault();
        this.loadBooks();
        // API.getBooks(this.state.bookSearch)
        // .then(res => {
        //     console.log(res.data.items);
        //     this.setState({ books: res.data.items });
        // })
        // .catch(err => console.log(err))
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
                    <h4>Search Results:</h4>
                    <br></br>
            {/* Comments: If there are search results, they are displayed. Otherwise app requests user to make a query.
            Results appear in a scrolling container to help the user scroll through the results and keep the search form in view. */}
                    {this.state.books.length ? (
                        <Row>
                        <Col size="xs-12">
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem 
                                        key={book.id}
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        link={book.volumeInfo.infoLink}
                                        buttonName="Save Book"
                                        click={this.handleSaveBook}>
                                    </ListItem>
                                ))}
                            </List>
                        </Col>
                    </Row>
                    ) : (
                        <h5>Please Search for a Book by Title</h5>
                    )}
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Search;