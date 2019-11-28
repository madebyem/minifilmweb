import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import App from './containers/App'

ReactDOM.render(<Provider
    store={store}><HashRouter><App/></HashRouter></Provider>, document.getElementById('root'));
