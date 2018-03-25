import React, { Component } from 'react';
import Aux from '../../wrapper/Auxiliary';
import Card from '../../components/box/Card';

class displayIssue extends Component {
    render () {
        let output = null;

        switch ( this.props.type ) {
            case ( 'modal-short' ):
                output = (
                  <Aux onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                  </Aux>
                );
                break;
            case ( 'modal-full' ):
                output = (
                  <Aux onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                      <h5>Creator ID: {this.props.created_by_id}</h5>
                      <h5>description: {this.props.description}</h5>
                      <h5>priority {this.props.priority}</h5>
                      <h5>status {this.props.status}</h5>
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

export default displayIssue;
