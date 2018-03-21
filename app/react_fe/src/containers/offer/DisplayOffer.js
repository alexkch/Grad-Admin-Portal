import React, { Component } from 'react';
import Aux from '../../wrapper/Auxiliary';
import sty from '../../css/bootstrap.min.css'
import styles from './Issues.css';

class displayIssue extends Component {
    render () {
        let output = null;

        switch ( this.props.type ) {
            case ( 'short' ):
                output = (

                  <div className={sty.card + ' ' + sty["border-primary"] + " " + sty["mb-3"]} onClick={this.props.select}>
                      <div className={sty["card-header"]}>
                          <div style={{height: "18px"}}>
                              <span style={{position: 'absolute', left: '3%', maxwidth: "50%"}}
                                    className={sty.badge + " " + sty["badge-primary"]}>ID:{this.props.issue_id} </span>
                              <span style={{position: 'absolute', right: '3%', maxwidth: "50%"}}
                                    className={sty.badge + " " + sty["badge-info"]}>Creater: {this.props.created_by}</span>
                          </div>
                      </div>

                      <div className={sty["card-body"]}>
                          <div style={{height: "30px"}}>
                              <button style={{position: 'absolute', left: '3%', bottom: "10%", maxwidth: "50%"}}
                                      className={sty.btn + " " + sty["btn-outline-info"]}>Status:{this.props.status}</button>
                              <h6 style={{position: 'absolute', right: '3%', bottom: "10%", maxwidth: "50%"}}
                                  className={sty["text-muted"]}>{this.props.created_by_id}</h6>
                          </div>
                      </div>
                  </div>
                );
                break;
            case ( 'full' ):
                output = (
                  <article className={styles.Issue} onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                      <h5>Creator ID: {this.props.created_by_id}</h5>
                      <h5>description: {this.props.description}</h5>
                      <h5>priority {this.props.priority}</h5>
                      <h5>status {this.props.status}</h5>
                  </article>
                );
                break;
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
                  <article className={styles.Issue} onClick={this.props.select}>
                      <h2>Issue for {this.props.created_by}</h2>
                      <h5>Issue ID: {this.props.issue_id}</h5>
                      <h5>priority {this.props.priority}</h5>
                      <h5>status {this.props.status}</h5>
                  </article>
                );
        }

        return output;
    }
}

export default displayIssue;
