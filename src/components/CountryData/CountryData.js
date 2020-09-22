import React, {useEffect , useState} from 'react';
import {Link} from "react-router-dom";

export default function CountryData({match}) {
    const [countryData , setCountryData] = useState([{
        borders:[]
    }]);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
            .then(res => res.json())
            .then(data => setCountryData(data));
        }, [match.params.id]);
        const borderList= countryData.map(data => {
        return data.borders;
    });

    return (
        <div>
            <h1><Link to={'/'}>Back To Main Screen</Link></h1>
            <ul>
                {(borderList[0]).map(data => (
                    <li>
                        <Link to={`/code/${data}`}>{data}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
