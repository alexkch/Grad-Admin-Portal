import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css'

class TicketCreate extends Component {
	constructor(props){
		super(props);
        this.state = {ticketOwner: 0, status: 0, amount: 1};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	handleSubmit(event){
		// Create tickets
        event.preventDefault();
        
	}

	handleChangeValue(event){
		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	render(){
        return (
            <div className='CreateUser'>
                <form onSubmit={this.handleSubmit}>
                    <div className={sty["form-group"]}>
                        <label>Owner</label>
                        <input className={sty["form-control"]} name='ticketOwner' type="number" min='0'
                               placeholder={"Input owner ID"}
                               onChange={this.handleChangeValue}/>

                        <label>Status</label>
                        <select className={sty["form-control"]}>
                            <option value="0">Unallocated</option>
                            <option value="1">allocated</option>
                        </select>

                        <label>Amount</label>
                        <input className={sty["form-control"]} name='amount' type="number" min='1'
                               placeholder={"Input amount"}
                               onChange={this.handleChangeValue}/>

                    </div>

                    <button type="submit" className={sty["btn"] + " " + sty["btn-primary"]}>Create Ticket</button>
                </form>

            </div>

			);
	
	}
}

export default TicketCreate;
