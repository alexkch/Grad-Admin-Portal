import React from 'react';
import strcat from 'classnames';
import { Pagination, PaginationItem, PaginationLink, Button, ButtonGroup , Container, Row, Col } from 'reactstrap';

const Pagebar = (props) => (

    <Container style={{ "padding-top" : "5px"}}>
        <Row>
          <Col sm="10" />
          <Col sm="2">
            <Pagination size="sm">
            <PaginationItem>
            <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">
            1
            </PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">
            2
            </PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">
            3
            </PaginationLink>
            </PaginationItem>

            <PaginationItem>
            <PaginationLink next href="#" />
            </PaginationItem>
            </Pagination>
          </Col>
        </Row>
    </Container>
);


export default Pagebar;
