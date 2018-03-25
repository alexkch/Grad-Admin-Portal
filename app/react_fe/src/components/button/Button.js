import React from 'react';
import Aux from '../../wrapper/Auxiliary';
import { Button, ButtonGroup } from 'reactstrap';

const button = (props) => {

  let output = null;

    switch ( props.type) {
      case ( 'danger' ):
        output = (
          <Button outline color="danger"
            type="submit"
            onClick={props.clicked}>
            {props.children}
          </Button>
        );
        break;
      case ( 'success' ):
        output = (
          <Button outline color="success"
            type="submit"
            onClick={props.clicked}>
            {props.children}
          </Button>
        );
        break;
      case ( 'secondary' ):
        output = (
          <Button outline color="secondary"
            type="submit"
            onClick={props.clicked}>
            {props.children}
          </Button>
        );
        break;
      case ( 'primary' ):
        output = (
          <Button outline color="primary"
            type="submit"
            onClick={props.clicked}>
            {props.children}
          </Button>
        );
        break;
      case ( 'disabled' ):
          output = (
            <Button outline color="info"
              type="submit"
              onClick={props.clicked}
              disabled={props.disabled}>
              {props.children}
            </Button>
          );
          break;
      case ( 'disabled-stretch' ):
          output = (
            <Button color="info" size="lg" block
              type="submit"
              onClick={props.clicked}
              disabled={props.disabled}>
              {props.children}
            </Button>
          );
          break;
      case ( 'stretch' ):
          output = (
            <Button color="secondary" size="info" block
              type="submit"
              onClick={props.clicked}>
              {props.children}
            </Button>
          );
          break;
      case ( 'stretch-dark' ):
          output = (
            <Button outline color="secondary" size="lg" block
              type="submit"
              onClick={props.clicked}>
              {props.children}
            </Button>
          );
          break;
      default:
          output = (
            <Button outline color="info"
              type="submit"
              onClick={props.clicked}>
              {props.children}
            </Button>
          );
  };

  return ( <Aux>{output}</Aux> );

};


export default button;
