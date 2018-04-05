import React, { Component } from 'react';
import {connect} from "react-redux";
import { Route, Switch } from 'react-router-dom';
import * as Actions from "../../store/actions";
import NewTicket from './NewTicket';
import EditTicket from './EditTicket';
import DeleteTicket from './DeleteTicket';
import Pagebar from '../../components/navigation/Pagebar';
import CardTicket from '../../components/box/CardTicket';
import Aux from '../../utils/auxiliary';


class Tickets extends Component {

    state = {
      ticket: null,
      selected: false,
    }


    componentDidMount() {
      	this.props.getUserData(this.props.token);
		    this.props.getTickets(this.props.token);
        this.props.getUsers(this.props.token);
    };



    render () {
        let tickets;
        tickets = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
                 (this.props.tickets.map((ticket, index) => <CardTicket key={ticket._id}
                   professor={ticket.professor}
                   status={ticket.status}
                   type={ticket.type}
                   created_on={ticket.created_on}
                   isOwner={ticket.created_by_id == this.props.userId}
                   url={this.props.match.url}
                   />))


      return (
            <Aux>
              <Switch>
                <Route path="/tickets/:id/del" exact component={DeleteTicket} />
                <Route path="/tickets/:id/edit" exact component={EditTicket} />
              </Switch>
              <Pagebar/>
	            <Route path="/tickets" render={ () => tickets } />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
        userId: state.user.userId,
        name: state.user.name,
        tickets: state.ticket.tickets,
        error: state.ticket.error,
        errorMsg: state.ticket.errorMsg
    };
};


const mapDispatchToProps = dispatch => {
    return {
        getUsers: (token) => dispatch(Actions.getUsers(token)),
        getUserData: (token) => dispatch(Actions.getUserData(token)),
		    getTickets: (token) => dispatch(Actions.getTickets(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
