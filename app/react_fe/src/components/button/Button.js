import React from 'react';
import sty from '../../css/bootstrap.min.css';
import strcat from 'classnames';

const button = (props) => (
  <button
    type="submit"
    className={strcat(sty["btn"],sty["btn-outline-info"],sty["btn-block"])}
    onClick={props.clicked}
    disabled={props.disabled}>{props.children}
  </button>

);

export default button;
