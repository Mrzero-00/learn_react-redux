import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import './excercise.js';
import {Provider,} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/root';
// import myLogger from './middleware/myLogger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import './asyncExcercise.js';
// devtools 사용 안할때
// const store = createStore(rootReducer,applyMiddleware(logger));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk,logger)
  ));

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
