import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';



class Axios extends Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(data => console.log("From Axios:", data));
    }
    render() {
        return (
            <div className='App'>
                <h1>I am form Axios</h1>
            </div>
        )


    }
}








export default Axios;