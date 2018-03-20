import React, { Component } from 'react';
import EditTicket;

class DisplayTicket extends Component {
	constructor(props){
		super(props);
		
		this.state = {ticket: props.ticket, stat: "view"}
		this.handleClick = this.handleClick.bind(this);
		this.handleEdited = this.handleEdited.bind(this);
	}

	handleClick(event){
		this.setState({stat: "edit"});
	}
	handleEdited(newTicket){
		this.setState({stat: "view", ticket: newTicket});
	}

	render(){
		let page = null;
		if (this.state.stat === "view"){
			page = (
				<div>
					<Ticket key={ticket._id} ticket_id={ticket._id} created_by={ticket.created_by} prof={ticket.professor} status={ticket.status}/>
					<button onClick={this.handleClick} callback={this.handleEdited} >
		  				Edit
					</button>

				</div>
			);

		}
		else if(this.state.stat === "edit"){
			page = <EditTicket ticket=this.state.ticket />;
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
				Free Tickets: {free_t} Redeemed Tickets: {used_t}
			</section>
			<section>
				Domestic Tickets: {dom_t} International Tickets: {int_t}
			</section>);
		return (
			{ticket_tracker}
			<ul> {tickets} </ul>);
		}

	}
}
export default ListTickets;
