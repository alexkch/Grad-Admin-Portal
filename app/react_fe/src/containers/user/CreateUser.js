import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css'
import axios from "axios/index";

class CreateUser extends Component{

	constructor(props){
		super(props);
		this.state = {email: '', password: '', name: '', usertype: 'faculty', isAdmin: false};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);

	}
    handleSubmit(){
        // Put ticket
        //this.props.callback(this.state.ticket);

        axios({method: 'post',
            url: '/user',
            data: {email: this.state.email,
                password: this.state.password,
                usertype: this.state.usertype,
                isAdmin: this.state.isAdmin}
        });
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
                        <select className={sty["form-control"]} value={this.state.usertype}>
                            <option value = 'faculty'>Faculty</option>
                            <option value = 'budget_office'>Budget Office</option>
                            <option value = 'grad_office'>Grad Office</option>
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
