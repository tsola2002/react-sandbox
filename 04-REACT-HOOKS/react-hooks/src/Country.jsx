import React, { useEffect, useState } from 'react'

// function getCountryData(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(response => response.json())
//         // .then(data => console.log(data))
//         .then(data => renderCountry(data[0]));
// }


function Country() {

    // STATE REQUIRED FOR READING API INFO
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const countryName = "nigeria";

    // UPDATE OUR STATE USING USEEFFECT HOOK
        useEffect(() => {
            fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch country data');
                } else{
                    //console.log(response.json());
                    return response.json();
                }
            })
            .then(data => {
                console.log(data[0]);
                //LOADING API INFO INTO COUNTRY STATE
                setCountry(data[0]);
                setLoading(false);
            })
            .catch(error => {
                setError(error.messgae);
                setLoading(false);
            });
            
        }, [countryName]);

        if(loading){
            return <p>Loading country Data ...</p>;
        }
        if(error){
            return <p>Error: {error}</p>;
        }


  return (
    <div className="container">
        <h2>{ country.name.common }</h2>
        <img className="flag" src={ country.flags.png } />
        <p><strong>Population: </strong>{ country.population }</p>
        <p><strong>Region: </strong>{ country.region }</p>
    </div>
  );
}

export default Country