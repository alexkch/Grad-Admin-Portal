import React, { Component } from 'react';
import axios from 'axios';
import Ticket from '../../components/Ticket/Ticket';
import User from '../../components/User/User';
import UserInfo from '../../components/UserInfo/UserInfo';
import './Dashboard.css';

class Dashboard extends Component {

    state = {
      issues: []
    }
    async componentDidMount() {
      const res = await axios.get('http://localhost:4000/api/issues')
      console.log(res);
      this.setState({issues: res.data});
    };

    render () {
        const Issues = this.state.issues.map(issue => {
          return <Ticket key={issue.id} description={issue.description} priority={issue.priority}/>
        });
        return (
            <div>
                <section className="Tickets">
                  {Issues}
                </section>
                <section>
                    <User />
                </section>
                <section>
                    <UserInfo />
                </section>
            </div>
        );
    }
}

export default Dashboard;
