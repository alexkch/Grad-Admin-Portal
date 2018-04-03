import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import FontAwesome from 'react-fontawesome';
import { Container, Col, Row, Card, CardHeader, CardBody, CardFooter, Badge } from 'reactstrap';


const cardTicket = (props) => {

  let ownerOpts = (props.isOwner) ? (<CardBody>
                                            <Link to={props.url + '/' + props.ticket_id + '/edit'}>
                                              <Button type='primary'>Status:{props.status}</Button>
                                            </Link>
                                            <Link to={props.url + '/' + props.ticket_id + '/del'}>
                                              <FontAwesome name='trash-o' size='2x' style={{float: 'right', paddingLeft: '10px'}} />
                                            </Link>
                                          </CardBody>):
                                          null

    return (<section style={{"paddingBottom" : "10px"}}>
                <Card style={{"borderColor" : "black"}}>
                  <CardBody>
                    <Container>
                      <Row>
                        <h5>{props.professor}</h5>
                      </Row>
                   
                      <Row style={{"paddingBottom" : "5px", "color" : props.btn_clr }}>
                        STATUS: {props.status}
                      </Row>
                      <Row style={{"paddingBottom" : "5px"}}>
                        {props.created_on}
                      </Row>
                    </Container>
                  </CardBody>
                  <CardFooter>
                    <Container>
                      {ownerOpts}
                    </Container>
                  </CardFooter>
                </Card>
              </section>)
    
};

export default cardTicket;
