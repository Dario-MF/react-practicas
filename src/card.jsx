import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from "react";

const Card = ({key, id, image, title, descrption})=> (
    </div>    
    <div className="col s3">
         <div>
             <div className="card">
                 <div className="card-image">
                     <img src={image} />
                     <span className="card-title">{title}</span>
                 </div>
                 <div className="card-content">
                     <p>{description}</p>
                 </div>
                 <div className="card-action">
                     <a href="#">This is a link</a>
                 </div>
             </div>
         </div>
     </div>
)
