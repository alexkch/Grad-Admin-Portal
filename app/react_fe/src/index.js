import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import './css/bootstrap.min.css';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';


axios.defaults.baseURL = 'http://localhost:4000/api';
/*
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKENS';
axios.interceptors.request.use(request => {
  return request;
});
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(  <Provider store={store}>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </Provider>, document.getElementById( 'root' ));

registerServiceWorker();
