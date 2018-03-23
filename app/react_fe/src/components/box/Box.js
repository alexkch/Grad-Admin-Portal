import React, {Component} from 'react';

import sty from '../../css/bootstrap.min.css';




const box = (props) => {
    let boxColor = sty["text-white"] + " " + sty["bg-dark"];
    if (props.color){
        switch (props.color){
            case('primary'):
                boxColor = sty["text-white"] + " " + sty["bg-dark"];
                break;
            case('secondary'):
                boxColor = + sty["bg-secondary"];
                break;
            case('info'):
                boxColor = sty["text-white"] + " " + sty["bg-info"];
                break;
            case('success'):
                boxColor = sty["text-white"] + " " + sty["bg-success"];
                break;
            case('danger'):
                boxColor = sty["text-white"] + " " + sty["bg-danger"];
                break;
            default:
                boxColor = sty["text-white"] + " " + sty["bg-dark"];

        }
    }


    return (<div className={sty.card + " " + boxColor +" " + sty["mb-3"]}>
        <div className={sty["card-header"]}>{props.title}</div>
        <div className={sty["card-body"]}>
            {props.body}
        </div>
    </div>)
};

export default box;
