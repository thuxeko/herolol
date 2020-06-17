import React, { Component } from 'react';
import cdnPath from '../components/data/pathCDN.json';
import champion from '../components/data/champion.json';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const lstHeros = Object.entries(champion.data);

class ListHero extends Component {
    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                {
                    lstHeros
                        .map(ht =>
                            <>
                                <Grid item sm={1}>
                                    <Avatar src={cdnPath.CDN_CHAMP.CDN_CHAMP_AVATAR + ht[1].image.full} alt={ht[1].name}></Avatar>
                                    {/* <span>{ht[1].name}</span> */}
                                </Grid>
                            </>)
                }
            </Grid>
        );
    };
}

export default ListHero;