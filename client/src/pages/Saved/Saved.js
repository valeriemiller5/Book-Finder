import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Container, Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List"; 
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";

class Saved extends Component {
    state = {
        book: {}
      };

    componentDidMount() {
        this.loadBook(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }

    handleDeleteBook = id => {
    API.deleteBook(id)
        .then(res => this.loadBook())
        .catch(err => console.log(err));
    };

    loadBook = id => {
        // This console logs the correct MongoDB _id in the database for the corresponding book that was "saved" on the Search.js page
        console.log(id);
        API.getBook(id)
        .then(res => {
            // This console log is not returning the expected object from the MongoDB database. Instead, it is returning an object with information on this function.
            console.log(res)
            this.setState({
                // res.data only renders an object with the information {"kind":"books#volumes","totalItems":0}
                book: res.data,
                // These values do not render as they are not in the object that is fetched from the database
                title: res.data.title, 
                author: res.data.author,
                description: res.data.description,
                link: res.data.link,
                image: res.data.image 
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron 
                    message="Saved Books"
                />
                <Container>
                    <h4>Saved Books:</h4>
                    <br></br>
                    {/* Since the correct information is not being fetched from the database, the list of saved books never renders */}
                    {this.state.book.length ? (
                        <Row>
                            <Col size="xs-12">
                                <List>
                                    <ListItem
                                        key={this.state.book._id}
                                        title={this.state.book.title}
                                        author={this.state.book.authors}
                                        description={this.state.book.description}
                                        image={this.state.book.thumbnail}
                                        link={this.state.book.infoLink}
                                        buttonName="Delete"
                                        click={this.handleDeleteBook}>
                                    </ListItem>
                                </List>
                            </Col>
                        </Row>
                    ) : (
                        <h5>No Saved Books. Pleases Select a Book to Save.</h5>
                    )}
                    
                </Container>
            </div>
        )
    }
}

export default Saved;