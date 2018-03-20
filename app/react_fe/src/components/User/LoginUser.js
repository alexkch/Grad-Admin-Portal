import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css'

class LoginUser extends Component{
	constructor(props){
		super(props);
		this.state = {email: '', password: ''};
		
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
			<div>
				<form onSubmit={ this.handleSubmit }>
                    <div className={sty["form-group"]}>
                        <label >Email</label>
                        <input className={sty["form-control"]} name='email' type="email" value={this.state.email}
                               onChange={this.handleChangeValue} placeholder={"Email address"}/>

                        <label >Password</label>
                        <input type="password" className={sty["form-control"]} name="password"
                               value={this.state.password} onChange={this.handleChangeValue} placeholder={"Password"}/>
					</div>
                    <button type="submit" className={sty["btn"] + " " + sty["btn-secondary"]}>Log in</button>
        		</form>


            </div>
		);
	}

}
export default LoginUser;