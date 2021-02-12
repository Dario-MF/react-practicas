
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Card from './Card';

const cards = [
    {
        "id":1,
        "image":"https://picsum.photos/100/100",
        "title": "Paris",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":2,
        "image":"https://picsum.photos/100/100",
        "title": "Roma",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":3,
        "image":"https://picsum.photos/100/100",
        "title": "New York",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":4,
        "image":"https://picsum.photos/100/100",
        "title": "Amsterdam",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":5,
        "image":"https://picsum.photos/100/100",
        "title": "Dubai",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":6,
        "image":"https://picsum.photos/100/100",
        "title": "Ibiza",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":7,
        "image":"https://picsum.photos/100/100",
        "title": "Amsterdam",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":8,
        "image":"https://picsum.photos/100/100",
        "title": "Dubai",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  }
]


const CardGrid = () => (
    <div className="row">
        <div className="col s10 offset-s1">
            {cards.map(c =>(
                <Card
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

export default CardGrid
