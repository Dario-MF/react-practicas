import React from "react";
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actionsCreators'
import { connect } from 'react-redux'

const TravelCard = ({ id, image, title, description, travelAddToCart, cart }) => (
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
                    <button onClick={() => travelAddToCart(String(id))}>
                        {
                            cart.find(i => i === String(id))
                                ? 'Producto añadido'
                                : 'Añadir al Carrito'
                        }
                    </button>
                </div>
            </div>
        </div>
    </div>
)

const mapStateToProps = state => ({
    cart: state.cart
})


const mapDispatchToProps = dispatch => ({
    travelAddToCart(id) {
        dispatch(addToCart(id))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(TravelCard)
