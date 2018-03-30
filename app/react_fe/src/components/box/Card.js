import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import FontAwesome from 'react-fontawesome';
import { Container, Col, Row, Card, CardHeader, CardBody, Badge } from 'reactstrap';


const card = (props) => {

  switch (props.type) {
    case ( 'issues' ):
      return (<section style={{"paddingBottom" : "10px"}}>
                  <Card style={{"borderColor" : "black"}}>
                      <CardHeader>
                        <Badge color='dark' style={{float: 'left'}}>ID:{props.issue_id}</Badge>
                        <Badge color={props.header_clr} style={{float: 'right'}}>Priority: {props.priority}</Badge>
                        <span style={{color:"black", paddingLeft:"10px"}}>Created on: {props.created_on}</span>
                      </CardHeader>

                      <CardBody>
                              <Link to={"/issues/" + props.issue_id + '/edit'}>
                                <Button type={props.btn_clr} clicked={props.select}>Status:{props.status}</Button>
                              </Link>
                              <Link to={"/issues/" + props.issue_id + '/del'}>
                                <FontAwesome name='trash-o' size='2x' style={{float: 'right', paddingLeft: '10px'}} />
                              </Link>
                              <Link to={"/issues/" + props.issue_id + '/notes'}>
                                <FontAwesome name='comments-o' size='2x' style={{float: 'right'}} />
                              </Link>
                      </CardBody>
                  </Card>
                </section>);

    case ( 'issue' ):
      return (
                  <Card style={{"borderColor" : "black"}}>

                      <CardBody>
                        <Container>
                        <Row style={{"paddingBottom" : "10px"}}>
                          <Col sm="8" md="8">
                          <Badge color='dark'>ID:{props.issue_id}</Badge>
                          </Col>
                          <Col sm="2" md="2">
                          <Link to={"/issues/" + props.issue_id + '/edit'}>
                            <FontAwesome name='pencil-square-o' size='1x' />
                          </Link>
                          </Col>
                          <Col sm="2" md="2">
                          <Link to={"/issues/" + props.issue_id + '/del'}>
                            <FontAwesome name='trash-o' size='1x' />
                          </Link>
                          </Col>
                        </Row>
                          <Row style={{"paddingBottom" : "10px"}}>
                      <Badge color={props.header_clr}>Priority: {props.priority}</Badge>
                        </Row>
                        <Row style={{"paddingBottom" : "10px"}}>
                      <span style={{color:"black"}}>Created on: {props.created_on}</span>
                      </Row>


                              </Container>
                      </CardBody>
                  </Card>);
    default:
      return (<h2>DEFAULT: NEED TO SPECIFY TYPE</h2>);
    }
};

export default card;
