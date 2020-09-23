import React ,{useState, useEffect, createContext} from 'react';

export const CountryContext = createContext();

export const CountryProvider = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then(data => setData(data));
        }, []);

        return (
            <CountryContext.Provider value={[data]}>
            {props.children}
            </CountryContext.Provider>
        )
}
