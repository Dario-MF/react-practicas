import React from 'react';
import widthLoader from '../HOC/withLoader'


const TravelInfo = ({ card }) => {
    return (
        <div className="row" >
            <h1 className="col s10 offset-s1">{card.title}</h1>
            <div className="col s10 offset-s1">
                <img src={card.image} alt="Imagen del viaje" className="col s5" />
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default widthLoader('card')(TravelInfo) 