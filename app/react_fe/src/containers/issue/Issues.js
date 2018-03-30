import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import EditIssue from './EditIssue';
import DeleteIssue from './DeleteIssue';
import * as Actions from '../../store/actions/';
import Modal from '../../components/modal/Modal';
import Aux from '../../utils/auxiliary';
import Pagebar from '../../components/navigation/Pagebar';
import Card from '../../components/box/Card';

class Issues extends Component {

    state = {
      selected_issue: null,
      selected: false,
      isLoggedIn: this.props.token
    }

    componentDidMount() {
      this.props.getIssues(this.props.token);
    }

    viewIssueHandler = async (issueIndex) => {
      //const issues = [...this.state.issues]; //this.state.issues.slice();
      const issue = {
        ...this.props.issues[issueIndex]
      };
      await this.setState({selected_issue: issue, selected: true });
      console.log(this.state.selected_issue);
      console.log(this.state.selected);
    }

    closeIssueHandler = () => {
      this.setState({ selected: false });
      this.props.history.replace('/issues');
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
                   return <Card key={issue._id}
                   created_by={issue.created_by}
                   created_on={new Date(issue.created_on).toDateString()}
                   issue_id={issue._id}
                   status={issue.status}
                   priority={issue.priority}
                   btn_clr = {status_clr}
                   header_clr= {priority_clr}
                   type='issues'
                   select={() => this.viewIssueHandler(index)}
                   />}))

        let editIssue;
        editIssue = (this.state.selected) ? (<EditIssue
                  issue_id={this.state.selected_issue._id}
                  created_by={this.state.selected_issue.created_by}
                  created_by_id={this.state.selected_issue.created_by_id}
                  status={this.state.selected_issue.status}
                  description={this.state.selected_issue.description}
                  priority={this.state.selected_issue.priority}
                  show={this.state.selected}
                  close={this.closeIssueHandler}
                  />) : null


      return (
            <Aux>
              <Switch>
                <Route path="/issues/:id/del" exact component={DeleteIssue} />
                <Modal show={this.state.selected} close={this.closeIssueHandler} >
                  <Route path="/issues/:id/edit" exact render={ () => editIssue} />
                </Modal>
              </Switch>
              <Pagebar />
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
