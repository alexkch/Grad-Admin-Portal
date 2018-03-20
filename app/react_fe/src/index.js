import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';


axios.defaults.baseURL = 'http://localhost:4000/api';
//axios.defaults.headers.common['Authorization'] = 'AUTH_TOKENS';
axios.interceptors.request.use(request => {
  return request;
});

const store = createStore(reducer);

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
