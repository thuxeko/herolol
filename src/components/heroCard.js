import React from 'react';
import cdnPath from '../../appconfig.json';

console.log(cdnPath);
const heroCard = ({ name }) =>
    <acticle className='heroCard'>
        <h3>{name}</h3>
        <img src={"https://ddragon.leagueoflegends.com/cdn/8.4.1/img/champion/" + name+ ".png"} alt={name}/>
    </acticle>

export default heroCard