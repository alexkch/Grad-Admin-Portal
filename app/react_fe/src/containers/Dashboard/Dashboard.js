import React, { Component } from 'react';
import axios from 'axios';
//import Ticket from '../../components/ticket/Ticket';
import Issue from '../../components/issue/Issue';
import DisplayIssue from '../../components/issue/DisplayIssue';

import styles from './Dashboard.css';

class Dashboard extends Component {

    state = {
      issues: [],
      issue: null,
      selectedIssue: false,
      error: false
    }


    async componentDidMount() {
      //const res = await axios.get('/issues');
;
      try {
        const res = await axios.get('/issues');
        this.setState({issues: res.data});
      } catch (error) {
        console.log(error);
        this.setState({error: true});
      }
    };

    viewIssueHandler = (issueIndex) => {
      //const issues = [...this.state.issues]; //this.state.issues.slice();
      const issue = {
        ...this.state.issues[issueIndex]
      };
      this.setState({issue: issue, selectedIssue: true });
    }

    closeIssueHandler = () => {
      this.setState({ selectedIssue: false });
    }



    render () {
        let Issues;
        Issues = (this.state.error) ? (<p style={{textAlign: 'center'}}> Error with POSTS </p>) :
                 (this.state.issues.map((issue, index) => {
                   return <Issue key={issue._id}
                   issue_id={issue._id}
                   created_by={issue.created_by}
                   created_by_id={issue.created_by_id}
                   status={issue.status}
                   description={issue.description}
                   priority={issue.priority}
                   select={() => this.viewIssueHandler(index)}
                   />}))

        let displayIssue;
        displayIssue = (this.state.selectedIssue) ? (<DisplayIssue
                  key={this.state.issue._id}
                  issue_id={this.state.issue._id}
                  created_by={this.state.issue.created_by}
                  created_by_id={this.state.issue.created_by_id}
                  status={this.state.issue.status}
                  description={this.state.issue.description}
                  priority={this.state.issue.priority}
                  show={this.state.selectedIssue}
                  close={this.closeIssueHandler}
                  />) : null

        return (
            <div>
              {displayIssue}
              <section className={styles.Issues}>
                {Issues}
              </section>
            </div>
        );
    }
}

export default Dashboard;
