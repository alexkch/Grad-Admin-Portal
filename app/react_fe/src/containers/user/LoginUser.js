import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css'
import Form from '../../components/form/Form';
import Aux from '../../wrapper/Auxiliary';
import Button from '../../components/button/Button';
import * as Actions from '../../store/actions/';
import { connect } from 'react-redux';

class LoginUser extends Component {

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

	inputChangedHandler = ( event, authForm ) => {
			const updatedAuthForm = {
					...this.state.form,
					[authForm]: {
							...this.state.form[authForm],
							value: event.target.value,
							valid: this.checkValidity( event.target.value, this.state.form[authForm].validation ),
							touched: true
					}
			};
			this.setState( { form : updatedAuthForm } );
	}

	authHandler = (event) => {
		event.preventDefault();
		this.props.Auth(this.state.form.email.value, this.state.form.password.value);
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
				<form onSubmit={this.authHandler}>
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
				<Aux>{form}</Aux>
		);
	}
}


const mapStateToProps = state => {
  return {
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
		Auth: (email, password) => dispatch(Actions.auth(email, password))
  };
};

export default connect(null, mapDispatchToProps)(LoginUser);
