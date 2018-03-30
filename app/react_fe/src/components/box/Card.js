import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import FontAwesome from 'react-fontawesome';
import { Card, CardHeader, CardBody, Badge } from 'reactstrap';


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
                              <Link to={"/issues/" + props.issue_id + '/note'}>
                                <FontAwesome name='comments-o' size='2x' style={{float: 'right'}} />
                              </Link>
                      </CardBody>
                  </Card>
                </section>);
    default:
      return (<h2>DEFAULT: NEED TO SPECIFY TYPE</h2>);
    };
};

export default card;
