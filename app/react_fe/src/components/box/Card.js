import React, {Component} from 'react';

import sty from '../../css/bootstrap.min.css';

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
              <button onClick={props.select} style={{position: 'absolute', left: '3%', bottom: "10%", maxwidth: "50%"}}
                      className={sty.btn + " " + sty["btn-outline-info"]}>Status:{props.status}</button>
              <h6 style={{position: 'absolute', right: '3%', bottom: "10%", maxwidth: "50%"}}
                  className={sty["text-muted"]}>{props.created_by_id}</h6>
          </div>
      </div>
  </div>
);

export default card;
