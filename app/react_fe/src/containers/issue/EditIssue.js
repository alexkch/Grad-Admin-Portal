import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';
import Form from '../../components/form/Form';
import checkValidity from '../../utils/validateForm';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';
import Aux from '../../utils/auxiliary';
import Card from '../../components/box/Card';
import Modal from '../../components/modal/Modal';

class editIssue extends Component {

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
                      {value: '', displayValue: 'Select a priority'},
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

  editIssueHandler = (event) => {
    event.preventDefault();
    let session_meta = { userId : this.props.userId, name : this.props.name};
    this.props.createIssue(this.props.token, session_meta, this.state.form);
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
          <form onSubmit={this.editIssueHandler}>
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
              <Aux>
                <section>
                  <p>issue_id={this.props.issue_id}
                  created_by={this.props.created_by}
                  created_by_id={this.props.created_by_id}
                  status={this.props.status}
                  description={this.props.description}
                  priority={this.props.priority}
                  </p>
                </section>
                <section>
                  <Box color="secondary" header={"Create new Issues"}>{form}</Box>
                </section>
              </Aux>
        );
    }
}

export default editIssue;
