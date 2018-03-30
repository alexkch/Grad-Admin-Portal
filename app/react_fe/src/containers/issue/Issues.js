import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import DisplayIssue from './DisplayIssue';
import DeleteIssue from './DeleteIssue';
import * as Actions from '../../store/actions/';
import Modal from '../../components/modal/Modal';
import Aux from '../../utils/auxiliary';
import Pagebar from '../../components/navigation/Pagebar';

class Issues extends Component {

    state = {
      selected_issue: null,
      selected: false,
      isLoggedIn: this.props.token
    }

    componentDidMount() {
      this.props.getIssues(this.props.token);
    }

    viewIssueHandler = (issueIndex) => {
      //const issues = [...this.state.issues]; //this.state.issues.slice();
      const issue = {
        ...this.props.issues[issueIndex]
      };
      this.setState({selected_issue: issue, selected: true });
    }

    closeIssueHandler = () => {
      this.setState({ selected: false });
    }


    priorityColorHandler = (priority) => {
      switch (priority) {
        case ('urgent'): return 'danger'
        case ('high'): return 'warning'
        case ('medium'): return 'dark'
        default: return 'dark'
      }
    }


    render () {
        let issues;
        issues = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
                 (this.props.issues.map((issue, index) => {
                   let status_clr = ((issue.status) === 'open') ? 'primary' : 'secondary';
                   let priority_clr = this.priorityColorHandler(issue.priority);
                   return <DisplayIssue key={issue._id}
                   created_by={issue.created_by}
                   created_on={new Date(issue.created_on).toDateString()}
                   issue_id={issue._id}
                   status={issue.status}
                   priority={issue.priority}
                   status_clr = {status_clr}
                   priority_clr= {priority_clr}
                   type={'short'}
                   select={() => this.viewIssueHandler(index)}
                   />}))

        let modalIssue;
        modalIssue = (this.state.selected) ? (<DisplayIssue
                  key={this.state.selected_issue._id}
                  issue_id={this.state.selected_issue._id}
                  created_by={this.state.selected_issue.created_by}
                  created_by_id={this.state.selected_issue.created_by_id}
                  status={this.state.selected_issue.status}
                  description={this.state.selected_issue.description}
                  priority={this.state.selected_issue.priority}
                  type={'modal-full'}
                  show={this.state.selected}
                  close={this.closeIssueHandler}
                  />) : null


      return (
            <Aux>
              <Switch>
                <Route path="/issues/:id/del" exact component={DeleteIssue} />
              </Switch>
              <Pagebar />
              <Modal show={this.state.selected} close={this.closeIssueHandler} >
                {modalIssue}
              </Modal>
              {issues}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      name: state.user.name,
      issues: state.issue.issues,
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
    getIssues: (token) => dispatch(Actions.getIssues(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
