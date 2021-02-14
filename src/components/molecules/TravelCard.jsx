import React from "react";
import { Link } from 'react-router-dom';

const TravelCard = ({ id, image, title, description }) => (
    <div className="col s4">
        <div>
            <div className="card">
                <div className="card-image">
                    <Link to={`/viajes/${String(id)}`}>
                        <img src={image} />
                        <span className="card-title">{title}</span>
                    </Link>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <Link to={`/viajes${id}`} className=" cyan-text text-darken-2">Más información</Link>
                </div>
            </div>
        </div>
    </div>
)

export default TravelCard
