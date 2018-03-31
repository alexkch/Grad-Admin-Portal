import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import styles from './Chatbox.css';


const chatbox = (props) => {

    return (<ul className={styles.chat}>
              <li className={styles.left}>
                  <div className={styles.chatBody}>
                      <div className="header">
                          <strong className="primary-font">{props.created_by}</strong> <small className="pull-right text-muted">
                          <span className="glyphicon glyphicon-time"></span>{props.created_on}</small>
                      </div>

                      {props.message}

                      <span style={{float: "right"}}>
                        <Link to={props.url + '/:id' + '/edit'}>
                          <FontAwesome name='trash-o' />
                        </Link>
                      </span>
                      <span style={{float: "right", paddingRight: "10px"}}>
                        <Link to={props.url + '/' + props.id + '/delete'}>
                          <FontAwesome name='pencil-square-o'/>
                        </Link>
                      </span>

                  </div>
              </li>
            </ul>)};

export default chatbox;
