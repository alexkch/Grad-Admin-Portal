import React from 'react';

import sty from '../../css/bootstrap.min.css'

const post = (props) => (
    <div className={sty.card + ' ' + sty["border-primary"] + " " + sty["mb-3"]}>
        <div className={sty["card-header"]}>
            <div style={{height: "18px"}}>
                <span style={{position: 'absolute', left: '3%', maxwidth: "50%"}}
                      className={sty.badge + " " + sty["badge-primary"]}>ID:{props.ticket_id} </span>
                <span style={{position: 'absolute', right: '3%', maxwidth: "50%"}}
                      className={sty.badge + " " + sty["badge-info"]}>Creater: {props.created_by}</span>
            </div>
        </div>

        <div className={sty["card-body"]}>
            <div style={{height: "30px"}}>
                <button style={{position: 'absolute', left: '3%', bottom: "10%", maxwidth: "50%"}}
                        className={sty.btn + " " + sty["btn-outline-info"]}>Status:{props.status}</button>
                <h6 style={{position: 'absolute', right: '3%', bottom: "10%", maxwidth: "50%"}}
                    className={sty["text-muted"]}>{props.prof}</h6>
            </div>
        </div>
    </div>
);

export default post;
