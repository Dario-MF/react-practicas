import React, { Component } from 'react';
import axios from 'axios'
import TravelInfo from '../molecules/TravelInfo';


class Travel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card: []
        }
    }
    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/Dario-MF/fakedata/cards/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    card: response.data
                })
            })
    }
    render() {
        const { card } = this.state
        return <TravelInfo card={card} />
    }
}


export default Travel