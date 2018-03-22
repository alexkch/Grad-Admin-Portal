import React, { Component } from 'react';
import Ticket from './Ticket';
import EditTicketStatus from './EditTicket';


class DisplayTicket extends Component {
	constructor(props){
		super(props);
		
		this.state = {ticket: props.ticket, stat: "short"}
		// this.handleClick = this.handleClick.bind(this);
		// this.handleEdited = this.handleEdited.bind(this);
	}

	// handleClick(event){
	// 	this.setState({stat: "edit"});
	// }
	// handleEdited(newTicket){
	// 	this.setState({stat: "view", ticket: newTicket});
	// }

	render(){
		let page = null;
		switch(this.props.type){
			case ("short"):
				page = (
					<div>
						<Ticket key={this.state.ticket._id} ticket_id={this.state.ticket._id} created_by={this.state.ticket.created_by} prof={this.state.ticket.professor} status={this.state.ticket.status}/>

					</div>
				);
				break;
			
			case("edit"):
				page = <EditTicketStatus ticket={this.state.ticket} />;
				break;
		}
		return page;
	}

}
class ListTickets extends Component {
	constructor(props){
		super(props);
		this.state = {tickets: props.tickets}

	}

	render(){
		let tickets = this.state.tickets.map((ticket) => <li><DisplayTicket ticket={ticket} /></li>);
		let free_t = 0; // Get num Free tickets
		let used_t = 0; // Get num Redeemed Tickets
		let int_t = 0; // Get num international tickets
		let dom_t = 0; // Get num domestic tickets
		let ticket_tracker = (<section>
				<p> Free Tickets: {free_t} Redeemed Tickets: {used_t} </p>
				<p> Domestic Tickets: {dom_t} International Tickets: {int_t}</p>
			</section>);
		return (<section>
				{ticket_tracker}
				<ul style={{'list-style-type': 'none'}}>
				{tickets}
				</ul>
			</section>
			);
	}
}

export default DisplayTicket;
