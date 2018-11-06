import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import { BookList, EachBook } from "../../components/BookList"; 

class Search extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input 
                                                name="bookSearch"
                                                placeholder="Search for book by title"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <FormBtn  />
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <br></br>
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

export default Search;