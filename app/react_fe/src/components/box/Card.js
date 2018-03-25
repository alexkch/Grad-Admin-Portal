import React from 'react';
import Button from '../button/Button';
import { Card, CardHeader, CardText, CardBody, Badge } from 'reactstrap';


const card = (props) => (

  <section style={{"padding-bottom" : "10px"}}>
    <Card style={{"border-color" : "black"}}>
        <CardHeader>
            <div style={{height: "12px"}}>
                <Badge color='dark' style={{float: 'left'}}>ID:{props.issue_id} </Badge>
                <Badge color={props.header_clr} style={{float: 'right'}}>Priority: {props.priority}</Badge>
            </div>
        </CardHeader>

        <CardBody>
                <Button type={props.btn_clr} clicked={props.select}>Status:{props.status}</Button>
        </CardBody>
    </Card>
  </section>
);

export default card;
