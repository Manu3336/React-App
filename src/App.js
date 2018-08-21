import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Blog from './containers/Blog/Blog';
// import Post from '../src/components/Header/Header'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Post/> */}
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
