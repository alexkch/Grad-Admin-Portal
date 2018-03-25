import React from 'react';

import { Card, CardHeader, CardBody } from 'reactstrap';


const box = (props) => {

    return (<section style={{"padding-top": "10px" }}>
              <Card>
              <CardHeader>{props.header}</CardHeader>
              <CardBody>{props.children}</CardBody>
              </Card>
            </section>)
};

export default box;
