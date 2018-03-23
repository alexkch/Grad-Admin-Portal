import React, { Component } from 'react';
import styles from './NewOffer.css';
import Form from '../../components/form/Form';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';

class NewOffer extends Component {

    state = {
        form: {
            Offer: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Offer name'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            Description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
    };

    postHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let input in this.state.form) {
            formData[input] = this.state.form[input].value;
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedform = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedform[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedform[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedform) {
            formIsValid = updatedform[inputIdentifier].valid && formIsValid;
        }
        this.setState({form: updatedform, formIsValid: formIsValid});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }
        let form = (
            <form onSubmit={this.postHandler}>
                {formElementsArray.map(formElement => (
                    <Form
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button disabled={!this.state.formIsValid} type={'disabled-stretch'}>Submit</Button>
            </form>
        );
        return (
            <Box color="secondary" header={"Create new Offer"}>{form}</Box>
        );
    }
}

export default NewOffer;

