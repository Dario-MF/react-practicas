import React from 'react';
import TravelInfo from '../molecules/TravelInfo';
import useFetch from '../customHooks/useFetch';


const Travel = ({ match }) => {

    const info = useFetch(`https://my-json-server.typicode.com/Dario-MF/fakedata/cards/${match.params.id}`, [])

    return <TravelInfo card={info.data} />
}

export default Travel