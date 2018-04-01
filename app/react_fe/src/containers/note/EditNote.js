import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';
import { Container, Row, Col } from 'reactstrap';
import Form from '../../components/form/Form';
import checkValidity from '../../utils/validateForm';
import Aux from '../../utils/auxiliary';
import Chatbox from '../../components/box/Chatbox';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';

class editNote extends Component {


  state = {
      prevUrl: null,
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
    this.props.match.url.includes("/notes/edit") ? this.props.history.replace('/notes/' + this.state.prev_urlId + '/notes')
    : this.props.history.replace('/notes');
  }

  editNoteHandler = (event) => {
    event.preventDefault();
    let session_meta = { userId : this.props.userId, name : this.props.name};
    this.props.editNote(this.props.token, this.props.note._id, session_meta, this.state.form);
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
          <form onSubmit={this.editNoteHandler}>
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
              <Button disabled={!this.state.formIsValid} type={'disabled-dark-small'}>Update</Button>
          </form>
      );


      return (<Chatbox
               note_id={this.props.note_id}
               message={this.props.message}
               created_on={this.props.created_on}
               created_by={this.props.created_by}
               select={this.props.select}
               url={this.props.url}>
               {form}</Chatbox>);
    }
}
const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      name: state.user.name,
      note: state.note.note,
      error: state.note.error,
      errorMsg: state.note.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
	   getNote : (token, id) => dispatch(Actions.getNote(token, id)),
     editNote : (token, id, session, form) => dispatch(Actions.editNote(token, id, session, form))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editNote);
