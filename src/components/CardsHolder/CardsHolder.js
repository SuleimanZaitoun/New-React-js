import React, {useState , useEffect} from 'react';

import './CardsHolder.scss'

import Box from '../Card/Card.js'

function CardsHolder(props) {
    const [data , setData] = useState([{}]);
    const countryName = props.countryName;

    useEffect(() =>
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => setData(data))
    , []);

    return (
        <div  className={props.darkMode? 'main-holderDarkMode' : 'main-holder'}>
            <div className={props.darkMode? 'main-placeDarkMode container' : 'main-place container'}>
                <div className="boxes-Place">
                    {data.map( data => (
                        <Box name={data.name}
                            population={data.population}
                            Region = {data.region}
                            Capital = {data.capital}
                            flag = {data.flag}
                            darkMode={props.darkMode}
                        />
                    ))};
                </div>
            </div>
        </div>
    )
}

export default CardsHolder
