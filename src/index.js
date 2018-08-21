import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['content-Type'] = 'application/json';

axios.interceptors.request.use(request =>{
    console.log(request);
    return request;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response=>{
    console.log(response);
    return response
}, error=>{
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
