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
        console.log(id);
        API.getBook(id)
        .then(res => {
            console.log(res)
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