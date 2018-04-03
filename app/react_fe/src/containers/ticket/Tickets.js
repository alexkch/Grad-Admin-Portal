import React, { Component } from 'react';
import axios from 'axios';
import DisplayTicket from './DisplayTicket';
import Modal from '../../components/modal/Modal';
import Aux from '../../utils/auxiliary';
import styles from './Ticket.css';
import * as Actions from "../../store/actions";
import {connect} from "react-redux";
import { Route, Switch } from 'react-router-dom';
import EditTicket from './EditTicket';
import DeleteTicket from './DeleteTicket';
import Pagebar from '../../components/navigation/Pagebar';
import cardTicket from '../../components/box/CardTicket';

class Tickets extends Component {

    state = {
      ticket: null,
      selected: false,
    }


    componentDidMount() {
      	this.props.getUserData(this.props.token);
		this.props.getTickets(this.props.token);
    };

    viewTicketHandler = (ticketIndex) => {
      //const issues = [...this.state.issues]; //this.state.issues.slice();
      const ticket = {
        ...this.state.tickets[ticketIndex]
      };
      this.setState({ticket: ticket, selected: true });
    }

    closeTicketHandler = () => {
      this.setState({ selected: false });
    }


    render () {
        let tickets;
        tickets = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
                 (this.props.tickets.map((ticket, index) => <cardTicket key={ticket.ticket_id}
                   professor={ticket.professor}
                   status={ticket.status}
                   created_on={ticket.created_on}
                   isOwner={ticket.professor_id == this.props.userId}
                   url={this.props.match.url}
                   />))

        let modalTicket;
        modalTicket = (this.state.selected) ? (<DisplayTicket
                  /* ticket={ticket} */
                  type={'modal-short'}
                  show={this.state.selected}
                  close={this.closeTicketHandler}
                  />) : null


      return (
            <Aux>
              <Switch>
                <Route path="/tickets/:id/del" exact component={DeleteTicket} />
                <Route path="/tickets/:id/edit" exact component={EditTicket} />
              </Switch>
              <Pagebar/>
	            <Route path="/tickets" render={ () => tickets } />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
        userId: state.user.userId,
        name: state.user.name,
        tickets: state.ticket.tickets,
        error: state.ticket.error,
        errorMsg: state.ticket.errorMsg
    };
};


const mapDispatchToProps = dispatch => {
    return {
        actionGetTickets: (token) => dispatch(Actions.getTickets(token)),
		getTickets: (token) => dispatch(Actions.getTickets(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
