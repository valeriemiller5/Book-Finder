import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Container, Col, Row } from "../../components/Grid";
import { BookList, EachBook } from "../../components/BookList"; 

class Saved extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <BookList>
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