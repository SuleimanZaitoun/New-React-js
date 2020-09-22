import React, {useEffect ,useState ,useContext} from 'react';
import {Link} from "react-router-dom";

import {CountryProvider} from '../Context/CountryContext';

export default function CountryData({match}) {
    const [countryData, setCountryData]= useState([{
        borders:[]
    }]);
    const [allCountries, setAllCountries]= useState({});
    const [value]= useContext(CountryProvider);
    console.log(value)
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
            .then(res => res.json())
            .then(data => setCountryData(data));
        }, [match.params.id]);
        const borderList= countryData.map(data => {
        return data.borders;
    });

    useEffect(() => {
        setAllCountries(value)
    }, []);

    const names= allCountries.filter(data => {
        if(borderList[0].includes(data.cioc, 0))
        return data;
    });

    return (
        <div>
            <h1><Link to={'/'}>Back To Main Screen</Link></h1>
            <ul>
                {(names).map(data => (
                    <li>
                        <Link to={`/code/${data.cioc}`}>{data.name}</Link>
                    </li>
                ))}
            </ul>

            <h1>{countryData[0].name}</h1>
        </div>
    )
}
