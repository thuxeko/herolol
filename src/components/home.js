import React, { Component } from 'react';
import './home.css';
import ListHero from './listHero';
class Home extends Component {
    render() {
        return (
            <>
            <h1 className="titleIndex">Liên minh Pedia</h1>
            <ListHero/>
            </>
        );
    };
}

export default Home;