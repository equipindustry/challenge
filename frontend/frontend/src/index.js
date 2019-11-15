import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/Reducers/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

