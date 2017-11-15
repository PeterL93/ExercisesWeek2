import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2'
import registerServiceWorker from './registerServiceWorker';
import bookStore from "./BookStore";
//ReactDOM.render(<App />, document.getElementById('root'));

//Replace the render method in index.js with this and import App2.js
ReactDOM.render(<App2 bookStore={bookStore} />, document.getElementById('root'));
