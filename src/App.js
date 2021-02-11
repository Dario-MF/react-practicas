import React from 'react';
import Parallax from './Parallax';
import Card from './card';
import Formulario from './Formulario';

const cards = [
  {
      image:"https://picsum.photos/100/100",
      title: "Paris",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
      image:"https://picsum.photos/100/100",
      title: "Roma",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
      image:"https://picsum.photos/100/100",
      title: "New York",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
      image:"https://picsum.photos/100/100",
      title: "Amsterdam",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
      image:"https://picsum.photos/100/100",
      title: "Dubai",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
      image:"https://picsum.photos/100/100",
      title: "Ibiza",
      description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
    image:"https://picsum.photos/100/100",
    title: "Amsterdam",
    description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  },{
    image:"https://picsum.photos/100/100",
    title: "Dubai",
    description: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
}
]

function App() {
  return (
    <>
      <Parallax />
      <div className="row">
        <div className="col s10 offset-s1">
           {cards.map(c => <Card image={c.image} title={c.title} description={c.description}  />)}
        </div>
      </div>
      <Formulario />
    </>
  );
}




export default App;
