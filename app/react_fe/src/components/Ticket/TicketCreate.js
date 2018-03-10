import React, { Component } from 'react';

class TicketCreate extends Component {
	constructor(props){
		super(props);
		this.state = {ticketOwner: 0, status: 0, amount: 0}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	handleSubmit(){
		// Create tickets
	}

	handleChangeValue(event){
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	render(){
		let creator = (
			<div className="TicketCreate">
				<form onSubmit={ this.handleSubmit }>
					<label>
						Ticket Owner:
	        			<input name='ticketOwner' type="number" min='0' value={this.state.ticketOwner} onChange={this.handleChangeValue} />
					</label>
					<label>
						Amount:
	        			<input name='amount' type="number" min="1" value={this.state.amount} onChange={this.handleChangeValue} />
					</label>
					<label>
						<input name='status' type="radio" value="0"
							checked={this.state.status === "0"}
							onChange={this.handleChangeValue} />

						Unallocated
	        		</label>
					<label>
						<input name='status' type="radio" value="1"
							checked={this.state.status === "1"}
							onChange={this.handleChangeValue} />
						Allocated
	        		</label>
				  	<input type="submit" value="Submit" />
				</form>
			</div>

			);
		return creator;
	
	}
}

export default TicketCreate;
