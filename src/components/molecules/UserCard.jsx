import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import React from 'react'
import Avatar from '../../img/avatarLogin.png'

const UserCard = ({ name, username, email }) => (

    <li className="collection-item avatar">
        <img src={Avatar} alt="imagen avatar" className="circle" />
        <span className="title">{name}</span>
        <p>{username}</p>
        <p>{email}</p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
)

export default UserCard