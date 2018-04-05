import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import FontAwesome from 'react-fontawesome';
import { Container, Col, Row, Card, CardHeader, CardBody, CardFooter, Badge } from 'reactstrap';


const cardTicket = (props) => {

  let ownerOpts = (props.isOwner) ? (<CardBody style={{"float" : "right"}}>
                                            <Link to={props.url + '/' + props.ticket_id + '/edit'}>
                                              <Button type='primary'>Status:{props.status}</Button>
                                            </Link>
                                          </CardBody>):
                                          null

    return (<section style={{"paddingBottom" : "10px"}}>
                <Card style={{"borderColor" : "black"}}>
                  <CardBody>
                    <Container>
                      <Row>
                        Granted To:<h5>{props.professor}</h5>
                      </Row>

                      <Row style={{"paddingBottom" : "5px", "color" : props.btn_clr }}>
                        STATUS: {props.status}
                      </Row>
                      <Row style={{"paddingBottom" : "5px"}}>
                        {props.created_on}

                      </Row>
                    </Container>
                    {ownerOpts}
                  </CardBody>
                </Card>
              </section>)

};

export default cardTicket;
