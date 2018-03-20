import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css'

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
                    <div className={sty["form-group"]}>
                        <label>Email</label>
                        <input className={sty["form-control"]} name='email' type="email" value={this.state.email}
                               onChange={this.handleChangeValue} placeholder={"Email address"}/>

                        <label>Password</label>
                        <input type="password" className={sty["form-control"]} name="password"
                               value={this.state.password} onChange={this.handleChangeValue} placeholder={"Password"}/>

                        <label>Name</label>
                        <input type="text" className={sty["form-control"]} name="name"
                               value={this.state.name} onChange={this.handleChangeValue} placeholder={"Name"}/>

                        <label>Type</label>
                        <select className={sty["form-control"]}>
                            <option>Faculty</option>
                            <option>Budget Office</option>
                            <option>Grad Office</option>
                        </select>


                    </div>

                    <div className={sty["form-check"]}>
                        <label>
                            <input className={sty["form-check-input"]} name='isAdmin' type="checkbox"
                                   checked={this.state.isAdmin}
                                   onChange={this.handleChangeValue}/>
                            Admin
                        </label>

                    </div>

                    <button type="submit" className={sty["btn"] + " " + sty["btn-primary"]}>Create User</button>
        		</form>

			</div>
		);
	}

}
export default CreateUser;