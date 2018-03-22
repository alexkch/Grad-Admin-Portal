import React, {Component} from 'react';

class EditTicketStatus extends Component {
	constructor(props){
		super(props);
        // Props must contain the ticket to edit
        this.state = {ticket: props.ticket, status: props.ticket.status};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}
	handleSubmit(){
		// Put ticket
		this.props.callback(this.state.ticket);
		
		axios({method: 'put',
			url: '/tickets', 
			params: {id: this.state.ticket.professor_id}, 
			data: {professor_id: this.state.ticket.professor_id,
		      professor: this.state.ticket.professor,
		      status: this.state.status,
		      created_by: this.state.ticket.professor}
		});
	}

	handleChangeValue(event){
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	render(){
        return (
            <div className="EditTicket">
				<p>
					Change Status
				</p>
				<p>
                    Faculty: {this.state.ticket.professor}
				</p>
				<form onSubmit={ this.handleSubmit }>
					<label>
						<input name='status' type="radio" value="1"
							checked={this.state.status === "1"}
							onChange={this.handleChangeValue} />

						Allocated
	        		</label>
					<label>
						<input name='status' type="radio" value="2"
							checked={this.state.status === "2"}
							onChange={this.handleChangeValue} />
						Redeemed
	        		</label>
				  	<input type="submit" value="Submit" />
				</form>
			</div>

			);
	
	}

}

export default EditTicketStatus;
