import '../node_modules/materialize-css/dist/css/materialize.min.css';
import  React, {Component} from 'react';

const cards = [
    {
        "id":1,
        "image":"https://picsum.photos/200/200",
        "title": "Paris",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":2,
        "image":"https://picsum.photos/200/200",
        "title": "Roma",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":3,
        "image":"https://picsum.photos/200/200",
        "title": "New York",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":4,
        "image":"https://picsum.photos/200/200",
        "title": "Amsterdam",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":5,
        "image":"https://picsum.photos/200/200",
        "title": "Dubai",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":6,
        "image":"https://picsum.photos/200/200",
        "title": "Ibiza",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":7,
        "image":"https://picsum.photos/200/200",
        "title": "Amsterdam",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":8,
        "image":"https://picsum.photos/200/200",
        "title": "Dubai",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  }
]


const Viaje = ({match}) => {
    
    const viajeActual = cards.filter(c => c.id === parseInt(match.params.id))[0]

     return (
        <div className="row">
            <div className="col s6">
                <img src={viajeActual.image} alt="Imagen del viaje" />
                <h1>{viajeActual.title}</h1>
                <p>{viajeActual.description}</p>
            </div>
        </div> 
    )
}

    
   


export default Viaje