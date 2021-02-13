import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import axios from 'axios'


class Travel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/Dario-MF/fakedata/cards')
            .then(response => {
                this.setState({
                    cards: response.data
                })
            })
    }

    render() {
        if (this.state.cards.length > 0) {

            const { cards } = this.state
            const viajeActual = cards.filter(c => c.id === parseInt(this.props.match.params.id))[0]

            return (
                <div className="row">
                    <h1 className="col s10 offset-s1">{viajeActual.title}</h1>
                    <div className="col s10 offset-s1">
                        <img src={viajeActual.image} alt="Imagen del viaje" className="col s5" />
                        <p>{viajeActual.description}</p>
                    </div>
                </div>
            )
        } else {
            return <p className="center">Cargando empleados...</p>
        }
    }
}




export default Travel