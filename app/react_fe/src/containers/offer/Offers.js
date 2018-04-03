import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayIssue from './DisplayIssue';
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
    }

    viewOfferHandler = (offerIndex) => {
        //const issues = [...this.state.issues]; //this.state.issues.slice();
        const offer = {
            ...this.props.offers[offerIndex]
        };
        this.setState({offer: offer, selected: true });
    }

    closeOfferHandler = () => {
        this.setState({ selected: false });
    }

    //priorityColorHandler = (priority) => {
    //    switch (priority) {
    //        case ('urgent'): return 'danger'
    //        case ('high'): return 'warning'
    //        case ('medium'): return 'dark'
    //        default: return 'dark'
    //    }
    //}


    render () {
        let offers;
        offers = (this.props.error) ? (<p style={{textAlign: 'center'}}> {this.props.errorMsg} </p>) :
            (this.props.offers.map((offer, index) => {
                return <DisplayOffer key={offer.ticket_id}
                                     created_by={offer.created_by}
				     				 applicant_id={offer.applicant_id}
                                     ticket_id={offer.ticket_id}
                                     status={offer.status}
                                     type={'short'}
                                     select={() => this.viewOfferHandler(index)}
                />}))

        let modalOffer;
        modalOffer = (this.state.selected) ? (<DisplayOffer
            key={this.state.offer.ticket_id}
            professor_id={this.state.offer.professor_id}
            round={this.state.offer.round}
            ap_type={this.state.offer.type}
            applicant_id={this.state.offer.applicant_id}
			ticket_id={this.state.offer.ticket_id}
            type={'modal-full'}
            show={this.state.selected}
            close={this.closeIssueHandler}
            select={() => this.viewOfferHandler(index)}
        />) : null


        return (
            <Aux>
                <Pagebar />
                <Modal show={this.state.selected} close={this.closeIssueHandler} >
                    {modalOffer}
                </Modal>
                {offers}
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
