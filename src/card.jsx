import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ id, image, title, description})=> (   
    <div className="col s3">
        <div>
            <div className="card">
                <div className="card-image">
                    <Link to={`/viajes/${id}`}>
                        <img src={image} />   
                    </Link>
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <Link to={`/viajes/${id}`}>This is a link</Link>
                </div>
            </div>
        </div>
    </div>
)
export default Card