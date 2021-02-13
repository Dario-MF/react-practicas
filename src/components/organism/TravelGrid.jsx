import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import TravelCard from '../molecules/TravelCard';

const TravelGrid = ({ cards }) => (
    <div className="row">
        <div className="col s10 offset-s1">
            {cards.map(c => (
                <TravelCard
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    title={c.title}
                    description={c.description}
                />
            ))}
        </div>
    </div>
)

export default TravelGrid