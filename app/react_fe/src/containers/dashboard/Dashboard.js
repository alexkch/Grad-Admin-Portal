import React, { Component } from 'react';
import axios from 'axios';
//import Ticket from '../../components/ticket/Ticket';
import Issues from '../issue/Issues';
import Navbar from '../../components/navigation/Navbar';
import Aux from '../../wrapper/Auxiliary';
import styles from './Dashboard.css';

class Dashboard extends Component {

render () {
  return (
      <Aux>
        <Navbar />
        <Issues />
      </Aux>
    );
  }
}

export default Dashboard;
