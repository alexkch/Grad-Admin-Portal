import React, { Component } from 'react';
import axios from 'axios';
import Ticket from '../../components/Ticket/Ticket';
import User from '../../components/User/User';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from './Dashboard.css';

class Dashboard extends Component {

    state = {
      tickets: []
    }
    async componentDidMount() {
      const res = await axios.get('http://localhost:4000/api/tickets')
      console.log(res);
      this.setState({tickets: res.data});
    };

    render () {
        const Tickets = this.state.tickets.map(ticket => {
          return <Ticket key={ticket._id} ticket_id={ticket._id} created_by={ticket.created_by} prof={ticket.professor} status={ticket.status}/>
        });
        return (
            <div>
                <section className={styles.Tickets}>
                  {Tickets}
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
