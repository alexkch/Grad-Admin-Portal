import React, { Component } from 'react';
import Form from '../../components/form/Form';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';

class NewUser extends Component {

    state = {
        form: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'name',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
										minLength: 5
                },
                valid: false,
                touched: false
            },
						password: {
								elementType: 'input',
								elementConfig: {
										type: 'password',
										placeholder: 'Password'
								},
								value: '',
								validation: {
										required: true,
										minLength: 5
								},
								valid: false,
								touched: false
						},
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            usertype: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'faculty', displayValue: 'Faculty'},
                        {value: 'budget_office', displayValue: 'Budget Office'},
                        {value: 'grad_office', displayValue: 'Grad office'}
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
        //const order = {
            //user_id: this.props.user_id,
          //  form : formData
      //  }

        //axios.post( '/Users/new', order )
            //.then( response => {
                //this.props.history.push( '/' );
            //} )
            //.catch( error => {
            // need to redirect to 404 to handle
          //  } );
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
            <Box color="secondary" header={"Create new Users"}>{form}</Box>
        );
    }
}

export default NewUser;
