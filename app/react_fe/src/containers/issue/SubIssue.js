import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';
import Form from '../../components/form/Form';
import Aux from '../../utils/auxiliary';
import checkValidity from '../../utils/validateForm';
import Chatbox from '../../components/box/Chatbox';
import Button from '../../components/button/Button';

class subIssue extends Component {

  state = {
      form: {
        user: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: '', displayValue: 'Select User'}
                ]
            },
            value: '',
            validation: {
              required: true
            },
            valid: false
        }
      },
      formIsValid: false,
  }

  componentDidMount() {
    this.props.getUsers(this.props.token);

    let userList = this.state.form.user.elementConfig.options;
    this.props.users.map((user) => userList.push({value: user._id, displayValue: user.name}));
    this.setState({ form : { user : { ...this.state.form.user, elementConfig : { options : userList }}}});
    console.log(this.props.users);
    console.log(this.state);
  }

  subIssueHandler = (event) => {
    event.preventDefault();
    this.props.subscribeIssue(this.props.token, this.props.issue_id, this.props.userId);
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
          <form onSubmit={this.subIssuHandler}>
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
              <Button disabled={!this.state.formIsValid} type={'disabled-dark-small'}>Subscribe</Button>
          </form>
      );


      return (<Aux>{form}</Aux>);
    }
}
const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      users: state.user.users,
      name: state.user.name,
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
     subscribeIssue : (token, userId) => dispatch(Actions.subscribeIssue(token, userId)),
     getUsers : (token) => dispatch(Actions.getUsers(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(subIssue);
