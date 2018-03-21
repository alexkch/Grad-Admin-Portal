import React, { Component } from 'react';
import axios from 'axios';
import DisplayIssue from './DisplayIssue';
import Modal from '../../components/modal/Modal';
import Aux from '../../wrapper/Auxiliary';
import styles from './Issues.css';

class Issues extends Component {

    state = {
      issues: [],
      issue: null,
      selected: false,
      error: false,
      errorMsg: 'Something went wrong'
    }


    async componentDidMount() {
      //const res = await axios.get('/issues');
      try {
        const res = await axios.get('/issues');
        this.setState({issues: res.data, error: false});
      } catch (error) {
        console.log(error);
        this.setState({error: true, errorMsg: error.message});
      }
    };

    viewIssueHandler = (issueIndex) => {
      //const issues = [...this.state.issues]; //this.state.issues.slice();
      const issue = {
        ...this.state.issues[issueIndex]
      };
      this.setState({issue: issue, selected: true });
    }

    closeIssueHandler = () => {
      this.setState({ selected: false });
    }


    render () {
        let issues;
        issues = (this.state.error) ? (<p style={{textAlign: 'center'}}> {this.state.errorMsg} </p>) :
                 (this.state.issues.map((issue, index) => {
                   return <DisplayIssue key={issue._id}
                   created_by={issue.created_by}
                   issue_id={issue._id}
                   status={issue.status}
                   priority={issue.priority}
                   type={'short'}
                   select={() => this.viewIssueHandler(index)}
                   />}))

        let modalIssue;
        modalIssue = (this.state.selected) ? (<DisplayIssue
                  key={this.state.issue._id}
                  issue_id={this.state.issue._id}
                  created_by={this.state.issue.created_by}
                  created_by_id={this.state.issue.created_by_id}
                  status={this.state.issue.status}
                  description={this.state.issue.description}
                  priority={this.state.issue.priority}
                  type={'modal-short'}
                  show={this.state.selected}
                  close={this.closeIssueHandler}
                  />) : null


      return (
            <Aux>
              <Modal show={this.state.selected} close={this.closeIssueHandler} >
                {modalIssue}
              </Modal>
              {issues}
            </Aux>
        );
    }
}

export default Issues;
