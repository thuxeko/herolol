import React, { Component } from 'react';
import cdnPath from '../components/data/pathCDN.json';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';

class ListHero extends Component {
    state = {
        lstHeros: []
    };
    componentDidMount() {
        axios.get(cdnPath.CDN_CHAMP.CDN_CHAMP_URL)
            .then(res => {
                const lstHeros = Object.entries(res.data.data);
                this.setState({ lstHeros });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                {
                    this.state.lstHeros
                        .map(ht =>
                            <>
                                <Avatar alt={ht[1].name} src={cdnPath.CDN_CHAMP.CDN_CHAMP_AVATAR + ht[1].image.full} />
                                <span>{ht[1].name}</span>
                            </>)
                }
            </div>
        );
    };
}

export default ListHero;