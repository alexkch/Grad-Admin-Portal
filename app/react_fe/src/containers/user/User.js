import React, {Component} from 'react';
import Popover from 'react-popover';
import sty from '../../css/bootstrap.min.css';
import CreateUser from "./CreateUser";
import LoginUser from "../../components/User/LoginUser";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {tab:0, open:false, login: false, username: "Userinfo"};
    }
    handleClickRegister(e) {
        this.setState({tab:1, open:true});
    }

    handleClickLogin(e) {
        this.setState({tab:2, open:true});

    }

    handleClose(e) {
        this.setState({tab:0, open:false});
    }

    render () {
        const popoverTitle = (this.state.tab === 1) ? 'Register' : 'Log in';
        const popoverContent = (this.state.tab === 1) ?
            (<div className={sty.card + " " + sty["text-white"] + " " + sty["bg-info"] + " " + sty["mb-3"]}
                  style={{width: "500px"}}>
                <div className={sty["card-header"]}>{popoverTitle}</div>
                <div className={sty["card-body"]}>
                    {<CreateUser/>}
                </div>
            </div>) :

            (<div className={sty.card + " " + sty["text-white"] + " " + sty["bg-primary"] + " " + sty["mb-3"]}
                  style={{width: "500px"}}>
                <div className={sty["card-header"]}>{popoverTitle}</div>
                <div className={sty["card-body"]}>
                    {<LoginUser/>}
                </div>
            </div>);


        const popoverProps = {
            isOpen: this.state.open,
            preferPlace: 'below',
            place: 'below',
            onOuterAction: () => this.handleClose(),
            body: [
                popoverContent

            ]
        };



        if (this.state.login) {
            return (
                <div style={{position: 'absolute', right: '3%'}}>
                    <button type="button" className={sty.btn + " " + sty["btn-link"]} style={{color: '#FFFFFF'}}>
                        {this.state.username}
                    </button>

                    <button type="button" className={sty.btn + " " + sty["btn-outline-danger"]}>Log out</button>
                </div>
            );
        } else {
            return (
                <Popover {...popoverProps}>
                    <div className={sty["nav-item"]} style={{position: 'absolute', right: '3%'}}>

                        <button type="button" className={sty.btn + " " + sty["btn-outline-info"]}
                                onClick={this.handleClickRegister.bind(this)}>Sign up
                        </button>

                        <button type="button" className={sty.btn + " " + sty["btn-primary"]}
                                onClick={this.handleClickLogin.bind(this)}>Login
                        </button>

                    </div>
                </Popover>
            )
        }

    }
}


export default User;
