import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({ cart }) => {
    return (
        <button>{`Carrito: ${cart.length} `}</button>
    )
}

const mapStateToProps = state => (
    {
        cart: state.cart
    }
)

const mapDispachToProps = () => ({

})


export default connect(mapStateToProps, mapDispachToProps)(CartCounter)