import React, { Component } from 'react';
import Form from '../../components/form/Form';
import checkValidity from '../../utils/validateForm';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';

class NewIssue extends Component {

    state = {
        form: {
            description: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false
            },
            priority: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'urgent', displayValue: 'Urgent'},
                        {value: 'high', displayValue: 'High'},
                        {value: 'medium', displayValue: 'Medium'},
                        {value: 'low', displayValue: 'Low'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
    }

    postHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let input in this.state.form) {
            formData[input] = this.state.form[input].value;
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedform = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedform[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
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
            <Box color="secondary" header={"Create new Issues"}>{form}</Box>
        );
    }
}

export default NewIssue;
