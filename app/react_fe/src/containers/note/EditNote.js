import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';
import { Container, Row, Col } from 'reactstrap';
import Form from '../../components/form/Form';
import checkValidity from '../../utils/validateForm';
import Aux from '../../utils/auxiliary';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';

class editIssue extends Component {

  componentDidMount() {
    this.props.getIssue(this.props.token, this.props.match.params.id);
    this.setState({ prev_urlId : this.props.match.params.id });
  }

  state = {
      prev_urlId: null,
      show: true,
      form: {
          message: {
              elementType: 'textarea',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Edit Message'
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
  }

  closeModalHandler = () => {
    this.setState({ show: false });
    this.props.match.url.includes("/notes/edit") ? this.props.history.replace('/issues/' + this.state.prev_urlId + '/notes')
    : this.props.history.replace('/issues');
  }

  editIssueHandler = (event) => {
    event.preventDefault();
    let session_meta = { userId : this.props.userId, name : this.props.name};
    this.props.editIssue(this.props.token, this.props.issue._id, session_meta, this.state.form);
    this.closeModalHandler();
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
              <Button disabled={!this.state.formIsValid} type={'disabled-stretch'}>Update</Button>
          </form>
      );

      let issue = (this.props.issue) ? (<Aux><h5>Issue: ({this.props.issue._id})</h5>
                                        <h4>owner: {this.props.issue.created_by}</h4>
                                        <h4>priority: {this.props.issue.priority}</h4>
                                        <h4>description: {this.props.issue.description}</h4>
                                        <h4>status: {this.props.issue.status}</h4></Aux>) : null



      return (<Modal show={this.state.show} close={this.closeModalHandler}>
                <Container fluid>
                  <Row>
                    <Col md="6">
                      {issue}
                    </Col>
                    <Col md="6">
                      {form}
                    </Col>
                  </Row>
                </Container>
              </Modal>);
    }
}
const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      name: state.user.name,
      issue: state.issue.issue,
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
	   getIssue : (token, id) => dispatch(Actions.getIssue(token, id)),
     editIssue : (token, id, session, form) => dispatch(Actions.editIssue(token, id, session, form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editIssue);
