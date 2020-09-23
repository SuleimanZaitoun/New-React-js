import React, {useState , useEffect, useContext} from 'react';
import {Link} from "react-router-dom";

import './CardsHolder.scss';

import {CountryContext} from '../Context/CountryContext.jsx';

import Box from '../Card/Card.jsx';

function CardsHolder(props) {
    const [data, setData] = useState([]);
    const {
        countryName,
        selectData,
    } = props;

    const FliterdData = data.filter(name => {
            if (countryName) {
                return name.name.toLowerCase().includes(countryName.toLowerCase());
            }
            return name
        });

    const DoubleFliterdData = FliterdData.filter(name => {
        if (selectData) {
            return name.region.toLowerCase().includes(selectData.toLowerCase());
        }
        return name;
    });

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then(data => setData(data));
        }, [countryName]
    );

    return (
        <CountryContext.Provider value={data}>
                <div className={props.darkMode? 'main-holder-dark-mode': 'main-holder'}>
                <div className={props.darkMode? 'main-place-dark-mode container': 'main-place container'}>
                    <div className="boxes-Place">
                        {DoubleFliterdData.map( data => (
                            <Link to={`/code/${data.cioc}`}>
                                <Box
                                    key={data.index}
                                    name={data.name}
                                    population={data.population}
                                    Region={data.region}
                                    Capital={data.capital}
                                    flag={data.flag}
                                    darkMode={props.darkMode}
                                    cioc={data.cioc}
                            />
                            </Link>
                        ))};
                    </div>
                </div>
            </div>
        </CountryContext.Provider>
    )
}

export default CardsHolder
