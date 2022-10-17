import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';



class Axios extends Component {
    state = {
        dishes: null,
        errMessage: null
    }
    componentDidMount() {
        console.log("componenetDidMount: ", this.state);

        //by using axios.get method to show data or fetch information form another server

        axios.get('http://localhost:3001/dishes')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    dishes: data
                })
            })
            .catch(error => {
                this.setState({
                    errMessage: error.message
                })
            });
        //by using axios.post method we can manipulat infromation or add information in server

        axios.post('http://localhost:3001/dishes', { name: "Garlic Pizza with Cheese", price: "220" })
            .then(response => response.data)
            .then(data => console.log(data));

        //By using this axios.put,change information from server

        axios.put('http://localhost:3001/dishes/1', { name: "Chicken Burger", price: "350" })
            .then(resopnse => console.log(resopnse));

        //by using axios.delete, request to the server for delete data form server 

        axios.delete('http://localhost:3001/dishes/0')
            .then(response => console.log(response));


    }

    componentDidUpdate() {
        console.log("component Update", this.state);
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