import React, { Component } from 'react';
import axios from 'axios';
import DisplayTicket from './DisplayTicket';
import Modal from '../../components/modal/Modal';
import Aux from '../../utils/auxiliary';
import styles from './Ticket.css';
import * as Actions from "../../store/actions";
import {connect} from "react-redux";

class Tickets extends Component {

    state = {
      tickets: [],
      ticket: null,
      selected: false,
      error: false,
      errorMsg: 'Something went wrong',
      isLoggedIn: this.props.token
    }


    async componentDidMount() {
      //const res = await axios.get('/issues');
      //try {
      //  const res = await axios.get('/tickets');
      //  this.setState({tickets: res.data, error: false});
      //} catch (error) {
      //  console.log(error);
      //  this.setState({error: true, errorMsg: error.message});
      //}
		this.props.getTickets(this.props.token);
    };

    //componentDidMount() {
	//	this.props.actionGetIssues();
    //}

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
                 (this.props.tickets.map((ticket, index) => {
                   return <DisplayTicket ticket={ticket}
                   type={'short'}
                   select={() => this.viewTicketHandler(index)}
                   />}))

        let modalTicket;
        modalTicket = (this.state.selected) ? (<DisplayTicket
                  /* ticket={ticket} */
                  type={'modal-short'}
                  show={this.state.selected}
                  close={this.closeTicketHandler}
                  />) : null


      return (
            <Aux>
              <Modal show={this.state.selected} close={this.closeTicketHandler} >
                {modalTicket}
              </Modal>
              {tickets}
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
