import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Container, Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List"; 

class Saved extends Component {
    state = {
        book: {},
        saved: true
      };

    deleteBook = id => {
    API.deleteBook(id)
        .then(res => this.loadPage())
        .catch(err => console.log(err));
    };

    loadPage = () => {
        window.location.reload();
    }

    //   componentDidMount() {
    //     API.getBook(this.props.match.params.id)
    //       .then(res => this.setState({ book: res.data.items }))
    //       .catch(err => console.log(err));
    //   }

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
                                    <ListItem>
                                        {/* <p>Saved Books Go Here</p> */}
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