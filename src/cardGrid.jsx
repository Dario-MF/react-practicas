
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from 'react';
import TravelCard from './TravelCard';

const cards = [
    {
        "id":1,
        "image":"https://i.pinimg.com/originals/fb/e5/9b/fbe59b598580da10fbd1fd71d16d80b8.jpg",
        "title": "Paris",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":2,
        "image":"https://www.aerobusbcn.com/blog/wp-content/uploads/2020/02/jeon-hyungman-P51t40sRbT0-unsplash-700x500.jpg",
        "title": "Roma",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":3,
        "image":"https://lh3.googleusercontent.com/proxy/x1el_XWmIpk-FklSZSGEXBMdeuwieU9kUl14pkh9TFHaiGwK8s0L779Nu1Ssx4LbuHEUi_2v0LVuf6Vl8XLDgfwi2u2QE7Bv7clqNuFWsCT1kvSZXqwvWIC7I8vrDGMzlUo5BnjqY5g",
        "title": "New York",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":4,
        "image":"https://i1.wp.com/www.smartertravel.com/wp-content/uploads/2016/02/amsterdamcanalringinsummer.jpg?resize=700%2C500&ssl=1",
        "title": "Amsterdam",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":5,
        "image":"https://boardroom.global/wp-content/uploads/2017/10/Dubai2-e1509084227195-700x500.jpg",
        "title": "Dubai",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":6,
        "image":"https://discoveribiza.com/wp-content/uploads/2019/01/Sant-Antoni-de-Portmany-sunset-700x500.jpg",
        "title": "Ibiza",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":7,
        "image":"https://bv-dam.s3.amazonaws.com/dam/catalogs-muchoviaje/egipto-marruecos-y-rusia/egipto81.jpg",
        "title": "Egipto",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":8,
        "image":"https://i.pinimg.com/736x/ce/2c/0d/ce2c0d9e189307d794e0848bc4cc4061.jpg",
        "title": "Cancún",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
    },
    {
        "id":9,
        "image":"https://blog.pangea.es/wp-content/uploads/2020/02/viaje_japon_floracion_cerezos_monte_fuji.jpg",
        "title": "Japón",
        "description": "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
  }
]


const CardGrid = () => (
    <div className="row">
        <div className="col s10 offset-s1">
            {cards.map(c =>(
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

export default CardGrid
