import React from 'react'; //  needed to create react components
import ReactDOM from 'react-dom'; // works like a glue between the dom and rect components
import './index.css';
import App from './App'; // the actuall app that loads all our components
import registerServiceWorker from './registerServiceWorker'; 


// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

// const greeting = <h1>Hello World date {getCurrentDate()}</h1>;

ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();
