import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Container, Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List"; 

class Saved extends Component {
    state = {
        book: {}
      };

    componentWillMount() {
        this.loadBook()
    }

    handleDeleteBook = event => {
        event.preventDefault();
        let deleteBook = this.state.book
        let remove = event.target.getAttribute('id');
        console.log(remove);
        deleteBook.map(book => {
            if(remove === book._id) {
                console.log(book)
                API.deleteBook({_id: book._id})
                .then(res => {
                    console.log('book removed');
                    window.location.reload();
                })
                .catch(err => console.log(err))
                }
        })
    };

    loadBook = () => {
        API.getBook()
        .then(res => {
            console.log(res.data)
            this.setState({
                book: res.data,
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
                                    {this.state.book.map(mybook => (
                                        <ListItem 
                                            key={mybook._id}
                                            id={mybook._id}
                                            title={mybook.title}
                                            author={mybook.author}
                                            description={mybook.description}
                                            image={mybook.image}
                                            link={mybook.link}
                                            buttonName="Delete"
                                            click={this.handleDeleteBook}
                                            >
                                        </ListItem>
                                    ))}
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