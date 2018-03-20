import React, {Component} from 'react';

class CreateUser extends Component{
	constructor(props){
		super(props);
		this.state = {email: '', password: '', name: '', usertype: 'faculty', isAdmin: false}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);

	}
	handleSubmit(){
		// Create tickets
	}

	handleChangeValue(event){
		const name = event.target.name;
    	let value = event.target.value;
		if(event.target.type === 'checkbox'){
			value = event.target.checked;
		}
		this.setState({ [name]: value });
	}
	render(){
        return (
			<div className='CreateUser'>
				<form onSubmit={ this.handleSubmit }>
					<label>
						Email:
                        <input name='email' type="email" value={this.state.email} onChange={this.handleChangeValue}/>
					</label>
					<label>
						Password:
                        <input name="password" type="password" value={this.state.password}
                               onChange={this.handleChangeValue}/>
					</label>
					<label>
						Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChangeValue}/>
					</label>
					<label>
						<input name='usertype' type="radio" value="faculty"
							checked={this.state.usertype === "faculty"}
							onChange={this.handleChangeValue} />

						Faculty
	        		</label>
					<label>
						<input name='usertype' type="radio" value="budget_office"
							checked={this.state.usertype === "budget_office"}
							onChange={this.handleChangeValue} />
						Budget Office
	        		</label>
	        		<label>
						<input name='usertype' type="radio" value="grad_office"
							checked={this.state.usertype === "grad_office"}
							onChange={this.handleChangeValue} />
						Grad Office
	        		</label>
	        		<label>
						<input name='isAdmin' type="checkbox" checked={this.state.isAdmin}
							onChange={this.handleChangeValue} />
						Admin
	        		</label>				
        		</form>

			</div>
		);
	}

}
export default CreateUser;