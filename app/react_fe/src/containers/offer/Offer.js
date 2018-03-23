import React, { Component } from 'react';
import axios from 'axios';
import DisplayOffer from './DisplayOffer';
import Modal from '../../components/modal/Modal';
import Aux from '../../wrapper/Auxiliary';
import styles from './Offers.css';

class Offers extends Component {

    state = {
      offers: [],
      offer: null,
      selected: false,
      error: false,
      errorMsg: 'Something went wrong'
    };


    async componentDidMount() {
      //const res = await axios.get('/offers');
      try {
        const res = await axios.get('/offers');
        this.setState({offers: res.data, error: false});
      } catch (error) {
        console.log(error);
        this.setState({error: true, errorMsg: error.message});
      }
    };

    viewOfferHandler = (offerIndex) => {
      //const offers = [...this.state.offers]; //this.state.offers.slice();
      const offer = {
        ...this.state.offers[offerIndex]
      };
      this.setState({offer: offer, selected: true });
    };

    closeOfferHandler = () => {
      this.setState({ selected: false });
    };


    render () {
        let offers;
        offers = (this.state.error) ? (<p style={{textAlign: 'center'}}> {this.state.errorMsg} </p>) :
                 (this.state.offers.map((offer, index) => {
                  return <DisplayOffer ticket_id={offer.ticket_id}
                  applicant={offer.applicant}
                  applicant_id={offer.applicant_id}
                  professor_id={offer.professor_id}
                  professor_={this.state.offer.professor}
                  status={this.state.offer.status}
                  round={offer.round}
                  t_type={offer.type}
                  type={'short'}
                  select={() => this.viewOfferHandler(index)}
                  />}))

        let modalOffer;
        modalOffer = (this.state.selected) ? (<DisplayOffer
                  ticket_id={this.state.offer.ticket_id}
                  professor_id={this.state.offer.professor_id}
                  professor={this.state.offer.professor}
                  applicant={this.state.offer.applicant}
                  applicant_id={this.state.offer.applicant_id}
                  status={this.state.offer.status}
                  round={this.state.offer.round}
                  t_type={offer.type}
                  type={'modal-full'}
                  show={this.state.selected}
                  close={this.closeOfferHandler}
                  />) : null


      return (
            <Aux>
              <Modal show={this.state.selected} close={this.closeOfferHandler} >
                {modalOffer}
              </Modal>
              {offers}
            </Aux>
        );
    }
}

export default Offers;
