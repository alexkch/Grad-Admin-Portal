import React from 'react';

import styles from './Form.css';
import sty from '../../css/bootstrap.min.css'

const form = ( props ) => {
    let inputElement = null;
    let elementClassName = sty["form-control"];
    let validClassName = sty["form-control"] + " " + sty["is-valid"];
    let invalidClassName = sty["form-control"] + " " + sty["is-invalid"];
    if ( props.shouldValidate && props.touched) {
        if (props.invalid){
            elementClassName = invalidClassName;
        }else{
            elementClassName = validClassName
        }
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={elementClassName}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={elementClassName}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={elementClassName}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={elementClassName}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }




    return (
        <div className={sty["form-group"]}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default form;
