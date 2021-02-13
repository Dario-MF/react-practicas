import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react'
import UserCard from '../molecules/UserCard'
import UserGrid from '../organism/UserGrid'
import axios from 'axios'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        /*fetch('https://jsonplaceholder.typicode.com/users', { method: 'get' })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    users: json
                })
            })*/

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    render() {
        const { users } = this.state

        return <UserGrid users={users} />

    }
}

export default Users