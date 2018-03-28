import React from 'react';
import Button from '../button/Button';
import FontAwesome from 'react-fontawesome';
import { Card, CardHeader, CardBody, Badge } from 'reactstrap';


const card = (props) => (

  <section style={{"paddingBottom" : "10px"}}>
    <Card style={{"borderColor" : "black"}}>
        <CardHeader>
          <Badge color='dark' style={{float: 'left'}}>ID:{props.issue_id}</Badge>
          <Badge color={props.header_clr} style={{float: 'right'}}>Priority: {props.priority}</Badge>
          <span style={{color:"black", paddingLeft:"10px"}}>Created on: {props.created_on}</span>
        </CardHeader>

        <CardBody>
                <Button type={props.btn_clr} clicked={props.select}>Status:{props.status}</Button>
                <FontAwesome name='trash-o' size='2x' style={{float: 'right', paddingLeft: '10px'}} />
                <FontAwesome name='comments-o' size='2x' style={{float: 'right'}} />
        </CardBody>
    </Card>
  </section>
);

export default card;
