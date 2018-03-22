import React from 'react';
import sty from '../../css/bootstrap.min.css';
import strcat from 'classnames';
import Aux from '../../wrapper/Auxiliary';

const button = (props) => {

  let output = null;

  switch ( props.type) {
      case ( 'dark' ):
          output = (
            <button
              type="submit"
              className={strcat(sty["btn"],sty["btn-secondary"])}
              onClick={props.clicked}>
              {props.children}
            </button>
          );
          break;
      case ( 'submit-dark' ):
          output = null;
          break;
      case ( 'disabled' ):
          output = (
            <button
              type="submit"
              className={strcat(sty["btn"],sty["btn-outline-info"])}
              onClick={props.clicked}
              disabled={props.disabled}>
              {props.children}
            </button>
          );
          break;
      case ( 'disabled-stretch' ):
          output = (
            <button
              type="submit"
              className={strcat(sty["btn"],sty["btn-outline-info"],sty["btn-block"])}
              onClick={props.clicked}
              disabled={props.disabled}>
              {props.children}
            </button>
          );
          break;
      default:
          output = (
            <button
              type="submit"
              className={strcat(sty["btn"],sty["btn-outline-info"])}
              onClick={props.clicked}>
              {props.children}
            </button>
          );
  };

  return ( <Aux>{output}</Aux> );

};


export default button;
