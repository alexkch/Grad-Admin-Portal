import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css'
import Form from '../../components/form/Form';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';


class LoginUser extends Component{

	state = {
			form: {
					email: {
							elementType: 'input',
							elementConfig: {
									type: 'email',
									placeholder: 'Email'
							},
							value: '',
							validation: {
									required: true,
									isEmail: true
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
					}
			},
			isSignup: true
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

	constructor(props){
		super(props);
		this.state = {email: '', password: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);

	}
	handleSubmit(){
		// Create tickets
	}

	handleChangeValue(event){
		const name = event.target.name;
    	let value = event.target.value;
		if(event.target.type === 'checkbox'){
			value = event.target.checked;
		}
		this.setState({ [name]: value });
	}
	render() {
		const formElementsArray = [];
		for (let key in this.state.form) {
				formElementsArray.push({
						id: key,
						config: this.state.form[key]
				});
		};
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
				<div>{form}</div>
		);
	}

}
export default LoginUser;
