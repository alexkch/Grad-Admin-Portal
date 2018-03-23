import React, { Component } from 'react';
import Aux from '../../wrapper/Auxiliary';
import sty from '../../css/bootstrap.min.css'
import styles from './Offers.css';

class displayOffer extends Component {
    render () {
        let output = null;

        switch ( this.props.type ) {
            case ( 'short' ):
                output = (

                  <div className={sty.card + ' ' + sty["border-primary"] + " " + sty["mb-3"]} onClick={this.props.select}>
                      <div className={sty["card-header"]}>
                          <div style={{height: "18px"}}>
                              <span style={{position: 'absolute', left: '3%', maxwidth: "50%"}}
                                    className={sty.badge + " " + sty["badge-primary"]}>ID:{this.props.ticket_id} </span>
                              <span style={{position: 'absolute', right: '3%', maxwidth: "50%"}}
                                    className={sty.badge + " " + sty["badge-info"]}>Creater: {this.props.applicant}</span>
                          </div>
                      </div>

                      <div className={sty["card-body"]}>
                          <div style={{height: "30px"}}>
                              <button style={{position: 'absolute', left: '3%', bottom: "10%", maxwidth: "50%"}}
                                      className={sty.btn + " " + sty["btn-outline-info"]}>Status:{this.props.status}</button>
                              <h6 style={{position: 'absolute', right: '3%', bottom: "10%", maxwidth: "50%"}}
                                  className={sty["text-muted"]}>{this.props.professor_id}</h6>
                          </div>
                      </div>
                  </div>
                );
                break;
            case ( 'full' ):
                output = (
                  <article className={styles.Offer} onClick={this.props.select}>
                      <h2>Offer for {this.props.applicant}</h2>
                      <h5>Offer ID: {this.props.ticket_id}</h5>
                      <h5>Owner ID: {this.props.professor_id}</h5>
                      <h5>Type: {this.props.t_type}</h5>

                      <h5>round {this.props.round}</h5>
                      <h5>status {status}</h5>
                  </article>
                );
                break;
            case ( 'modal-short' ):
                output = (
                  <Aux onClick={this.props.select}>
                      <h2>Offer for {this.props.applicant}</h2>
                      <h5>Offer ID: {this.props.ticket_id}</h5>
                  </Aux>
                );
                break;
            case ( 'modal-full' ):
                output = (
                  <Aux onClick={this.props.select}>
                      <h2>Offer for {this.props.applicant}</h2>
                      <h5>Offer ID: {this.props.ticket_id}</h5>
                      <h5>Owner ID: {this.props.professor_id}</h5>
                      <h5>Type: {this.props.t_type}</h5>
                      <h5>round {this.props.round}</h5>
                      <h5>status {this.props.status}</h5>
                  </Aux>
                );
                break;
            default:
                output = (
                  <article className={styles.Offer} onClick={this.props.select}>
                      <h2>Offer for {this.props.applicant}</h2>
                      <h5>Offer ID: {this.props.ticket_id}</h5>
                      <h5>round {this.props.round}</h5>
                      <h5>status {this.props.status}</h5>
                  </article>
                );
        }

        return output;
    }
}

export default displayOffer;
