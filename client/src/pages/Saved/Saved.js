import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Container, Col, Row } from "../../components/Grid";
import { BookList } from "../../components/BookList"; 

class Saved extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron 
                    message="Saved Books"
                />
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <BookList>
                                {/* <EachBook /> */}
                                {/* Render Books Here */}
                            </BookList>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Saved;