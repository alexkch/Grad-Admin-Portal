import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import EditIssue from './EditIssue';
import DeleteIssue from './DeleteIssue';
import Notes from '../note/Notes';
import DeleteNote from '../note/DeleteNote';
import * as Actions from '../../store/actions/';
import Aux from '../../utils/auxiliary';
import Pagebar from '../../components/navigation/Pagebar';
import Card from '../../components/box/Card';

class Issues extends Component {

    state = {
      selected_issue: null,
      selected: false,
    }

    componentDidMount() {
      console.log(this.props.match);
      this.props.getIssues(this.props.token);
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

        let subscribedIssues = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
                 (this.props.issues.map((issue, index) => <Card key={issue._id}
                   created_by={issue.created_by}
                   created_on={new Date(issue.created_on).toDateString()}
                   issue_id={issue._id}
                   title={issue.title}
                   status={issue.status}
                   priority={issue.priority}
                   btn_clr = {((issue.status) === 'open') ? 'primary' : 'secondary'}
                   header_clr= {this.priorityColorHandler(issue.priority)}
                   type='issues'
                   url={this.props.match.url}
                   select={() => this.viewIssueHandler(index)}
                   />));


        let issues = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
                 (this.props.issues.map((issue, index) => <Card key={issue._id}
                   created_by={issue.created_by}
                   created_on={new Date(issue.created_on).toDateString()}
                   issue_id={issue._id}
                   title={issue.title}
                   status={issue.status}
                   priority={issue.priority}
                   btn_clr = {((issue.status) === 'open') ? 'primary' : 'secondary'}
                   header_clr= {this.priorityColorHandler(issue.priority)}
                   type='issues'
                   url={this.props.match.url}
                   select={() => this.viewIssueHandler(index)}
                   />));

      return (
            <Aux>
              <Switch>
                <Route path="/issues/:id/del" exact component={DeleteIssue} />
                <Route path="/issues/:id/edit" exact component={EditIssue} />
                <Route path="/issues/:id/notes/del" exact component={DeleteIssue} />
                <Route path="/issues/:id/notes/edit" exact component={EditIssue} />
                <Route path="/issues/:id/notes/:noteId/del" exact component={DeleteNote} />
              </Switch>
              <Pagebar/>
              <Switch>
                <Route path="/issues/:id/notes" component={Notes} />
                <Route path="/issues/subscribed" exact render={ () => subscribedIssues } />
                <Route path="/issues" render={ () => issues } />
              </Switch>
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
