import React, { Component } from 'react';
import axios from 'axios';
//import Ticket from '../../components/ticket/Ticket';
import Issue from '../../components/issue/Issue';
import Modal from '../../components/ui/modal/Modal';

import styles from './Dashboard.css';

class Dashboard extends Component {

    state = {
      issues: []
    }

    async componentDidMount() {
      const res = await axios.get('http://localhost:4000/api/issues')
      this.setState({issues: res.data});
    };

    render () {
        const Issues = this.state.issues.map(issue => {
          return <Issue key={issue._id} issue_id={issue._id} created_by={issue.created_by} created_by_id={issue.created_by_id} status={issue.status}
          description={issue.description} priority={issue.priority}/>
        });
        return (
            <div>

                <section className={styles.Issues}>
                <Modal />
                  {Issues}
                </section>
            </div>
        );
    }
}

export default Dashboard;
