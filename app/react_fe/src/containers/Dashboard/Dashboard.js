import React, {Component} from 'react';
import axios from 'axios';
import Ticket from '../ticket/Ticket';
import UserInfo from '../user/UserInfo';
import styles from './Dashboard.css';
import sty from '../../css/bootstrap.min.css'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside constructor');
    }

    state = {
        //tickets: []
        // Hardcoded for testing
        tickets: [{
            _id: "2143135",
            professor_id: "3124714",
            professor: "John W",
            status: "good",
            created_by: "prof creater"
        }]
    };

    async componentWillMount() {
        console.log('[App.js] Inside component will mount');
    };

    async componentDidMount() {
        console.log('[App.js] Inside component did mount');
        const res = await axios.get('http://localhost:4000/api/tickets')
        console.log(res);
        this.setState({tickets: res.data});

    };

    render() {
        console.log('[App.js] Inside render');
        const Tickets = this.state.tickets.map(ticket => {
            return <Ticket key={ticket._id} ticket_id={ticket._id} created_by={ticket.created_by}
                           prof={ticket.professor} status={ticket.status}/>
        });
        return (
            <div style={{margin: '3%'}}>
                <div style={{width: "70%", position: 'absolute', left: "3%"}}>
                    <section className={styles.Tickets + " " + sty["list-group"]}>
                        {Tickets}
                    </section>
                </div>
                <div style={{width: "30%", position: 'absolute', right: "3%"}}>
                    <section>
                        <UserInfo/>
                    </section>
                </div>
            </div>
        );
    }
}

export default Dashboard;
