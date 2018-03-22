import React, { Component } from 'react';
import axios from 'axios';
import DisplayIssue from './DisplayTicket';
import Modal from '../../components/modal/Modal';
import Aux from '../../wrapper/Auxiliary';
import styles from './Ticket.css';

class Tickets extends Component {

    state = {
      tickets: [],
      ticket: null,
      selected: false,
      error: false,
      errorMsg: 'Something went wrong'
    }


    async componentDidMount() {
      //const res = await axios.get('/issues');
      try {
        const res = await axios.get('/tickets');
        this.setState({tickets: res.data, error: false});
      } catch (error) {
        console.log(error);
        this.setState({error: true, errorMsg: error.message});
      }
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
        tickets = (this.state.error) ? (<p style={{textAlign: 'center'}}> {this.state.errorMsg} </p>) :
                 (this.state.tickets.map((ticket, index) => {
                   return <DisplayTicket ticket={this.state.ticket}
                   type={'short'}
                   select={() => this.viewTicketHandler(index)}
                   />}))

        let modalTicket;
        modalTicket = (this.state.selected) ? (<DisplayTicket
                  ticket={this.state.ticket}
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

export default Tickets;