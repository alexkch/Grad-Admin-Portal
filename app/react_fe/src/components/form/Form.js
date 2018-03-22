import React from 'react';

import styles from './Form.css';
import sty from '../../css/bootstrap.min.css'

const form = ( props ) => {
    let inputElement = null;
    const inputClasses = [styles.Form];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={sty["form-control"]}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={sty["form-control"]}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={sty["form-control"]}
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
                className={sty["form-control"]}
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
