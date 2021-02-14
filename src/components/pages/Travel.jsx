import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TravelInfo from '../molecules/TravelInfo';


const Travel = ({ match }) => {
    const [infoTravel, setInfoTravel] = useState({
        card: []
    })

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Dario-MF/fakedata/cards/${match.params.id}`)
            .then(response => setInfoTravel({
                card: response.data
            }))
    }, [])

    const { card } = infoTravel
    return <TravelInfo card={card} />

}


export default Travel