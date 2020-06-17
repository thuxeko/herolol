import React, { Component } from 'react';
import './home.css';
import ListHero from './listHero';
import Container from '@material-ui/core/Container';

class Home extends Component {
    render() {
        return (
            <Container>
                <h1 className="titleIndex">Liên minh Pedia</h1>
                <div className="pt-10">
                    <ListHero />
                </div>
            </Container>
        );
    };
}

export default Home;