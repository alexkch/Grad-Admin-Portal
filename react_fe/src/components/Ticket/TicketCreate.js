import React, { Component } from 'react';

class TicketCreate extends Component {
	constructor(props){
		super(props);
		this.state = {ticketOwner: 0, status: 0, amount: 0}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeOwner = this.handleChangeOwner.bind(this);
		this.handleChangeAmount = this.handleChangeAmount.bind(this);

		this.handleChangeStatus = this.handleChangeStatus.bind(this);
	}

	handleSubmit(){
		// Create tickets
	}
	handleChangeAmount(event){
		this.setState({ amount: event.target.value });
	}
	handleChangeOwner(event){
		this.setState({ ticketOwner: event.target.value });
	}
	handleChangeStatus(event){
		this.setState({ status: event.target.value });
	}
	render(){
		let creator = (
			<div className="TicketCreate">
				<form onSubmit={ this.handleSubmit }>
					<label>
						Ticket Owner:
	        			<input type="number" value={this.state.ticketOwner} onChange={this.handleChangeOwner} />
					</label>
					<label>
						Amount:
	        			<input type="number" value={this.state.amount} onChange={this.handleChangeAmount} />
					</label>
					<label>
						<input type="radio" value="0"
							checked={this.state.status === "0"}
							onChange={this.handleChangeStatus} />

						Unallocated
	        		</label>
					<label>
						<input type="radio" value="1"
							checked={this.state.status === "1"}
							onChange={this.handleChangeStatus} />
						Allocated
	        		</label>
				  	<input type="submit" value="Submit">
				</form>
			</div>

			);
		return creator;
	
	}
}

export default TicketCreate;
