import React from 'react';
import './App.css';
import fetch from 'cross-fetch';


class App extends React.Component {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log("From App.js", data));
  }


  render() {
    return (
      <div className='App'>
        <h1>Welcome To RESTAPI </h1>
      </div>
    );
  }
}

export default App;
