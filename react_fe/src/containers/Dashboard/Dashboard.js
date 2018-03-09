import React, { Component } from 'react';
import axios from 'axios';
import Ticket from '../../components/Ticket/Ticket';
import User from '../../components/User/User';
import UserInfo from '../../components/UserInfo/UserInfo';
import './Dashboard.css';

class Dashboard extends Component {

    async componentDidMount() {
      const res = await axios.get('http://localhost:4000/api/issues')
      console.log(res);
    };

    render () {
        return (
            <div>
                <section className="Tickets">
                    <Ticket />
                    <Ticket />
                    <Ticket />
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
