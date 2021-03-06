import React, { Component } from 'react';
import axios from 'axios'
import TravelGrid from '../organism/TravelGrid';


class CardGrid extends Component {
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
        const { cards } = this.state
        return <TravelGrid cards={cards} />
    }
}


export default CardGrid
