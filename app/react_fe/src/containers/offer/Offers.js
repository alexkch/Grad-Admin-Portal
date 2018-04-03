import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import DisplayOffer from './DisplayOffer';
import EditOffer from './EditOffer';
import DeleteOffer from './DeleteOffer';
import * as Actions from '../../store/actions/';
import Modal from '../../components/modal/Modal';
import Aux from '../../utils/auxiliary';
import Pagebar from '../../components/navigation/Pagebar';

class Offers extends Component {

    state = {
        offer: null,
        selected: false,
        isLoggedIn: this.props.token
    }

    componentDidMount() {
        this.props.getOffers();
		this.props.getUserData(this.props.token);
    }
    

    render () {
        let offers;
        offers = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
            (this.props.offers.map((offer, index) => {
                return <DisplayOffer key={offer.ticket_id}
							         professor_id={this.state.offer.professor_id}	
				     				 applicant_id={offer.applicant_id}
	     				             ap_type={this.state.offer.type}
			                         round={this.state.offer.round}
                                     ticket_id={offer.ticket_id}
                                     status={offer.status}
                                     type={'short'}
                                     }
                />}));
                
        return (
            <Aux>
              <Switch>
                <Route path="/offers/:id" exact component={DeleteOffer} />
                <Route path="/offers/:id" exact component={EditOffer} />
              </Switch>
              <Pagebar/>
              
              <Route path="/offers" render={ () => offers } />

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
        userId: state.user.userId,
        name: state.user.name,
        offers: state.offer.offers,
        error: state.offer.error,
        errorMsg: state.offer.errorMsg
    };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
    return {
        getOffers: (token) => dispatch(Actions.getOffers(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
