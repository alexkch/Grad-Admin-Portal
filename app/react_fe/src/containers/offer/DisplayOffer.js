import React, { Component } from 'react';
import Aux from '../../utils/auxiliary';
import Card from '../../components/box/Card';

class displayOffer extends Component {
    render () {
        let output = null;

        switch ( this.props.type ) {
            case ( 'modal-short' ):
                output = (
                    <Aux onClick={this.props.select}>
                        <h2>Offer for {this.props.applicant_id}</h2>
                        <h5>Ticket ID: {this.props.ticket_id}</h5>
                    </Aux>
                );
                break;
            case ( 'modal-full' ):
                output = (
                    <Aux onClick={this.props.select}>
                        <h2>Offer for {this.props.applicant_id}</h2>
                        <h5>Ticket ID: {this.props.ticket_id}</h5>
                        <h5>Round number: {this.props.round}</h5>
                        <h5>professor {this.props.professor_id}</h5>
                        <h5>type: {this.props.ap_type}</h5>
                    </Aux>
                );
                break;
            default:
                output = (
                    <Card
                        issue_id={this.props.issue_id}
                        created_by={this.props.created_by}
                        priority={this.props.priority}
                        select={this.props.select}
                        status={this.props.status}
                        created_by_id={this.props.created_by_id}
                        btn_clr={this.props.status_clr}
                        header_clr={this.props.priority_clr}
                    />
                );
        }

        return output;
    }
}

export default displayOffer;
