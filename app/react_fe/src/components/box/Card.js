import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css';
import Button from '../button/Button';

const card = (props) => (

  <div className={sty.card + ' ' + sty["border-primary"] + " " + sty["mb-3"]}>
      <div className={sty["card-header"]}>
          <div style={{height: "18px"}}>
              <span style={{position: 'absolute', left: '3%', maxwidth: "50%"}}
                    className={sty.badge + " " + sty["badge-primary"]}>ID:{props.issue_id} </span>
              <span style={{position: 'absolute', left: '25%', maxwidth: "50%"}}
                    className={sty.badge + " " + sty["badge-default"]}>Creator: {props.created_by}</span>
              <span style={{position: 'absolute', right: '1.5%', maxwidth: "50%"}}
                    className={sty.badge + " " + sty["badge-info"]}>Priority: {props.priority}</span>
          </div>
      </div>

      <div className={sty["card-body"]}>
          <div style={{height: "30px"}}>
              <Button clicked={props.select}>Status:{props.status}</Button>
          </div>
      </div>
  </div>
);

export default card;
