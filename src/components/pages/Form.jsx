import React, { Component } from 'react';


class Form extends Component {

    constructor(props) {
        super(props)

        //this.state almacena informacion del estado actual.
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            date: new Date()
        }

        this.changeFirstName = this.changeFirstName.bind(this)// es necesario blindear el this para no tener problemas con this.
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeFirstName(e) {
        // <setState> es un metodo para actualizar el estado, no se puede modificar directamente hay que usar este metodo.
        this.setState({
            firstName: e.target.value
        })
    }
    changeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    changeDate() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="row">
                <form className="col s10 offset-s1" id="formulario">
                    <h3>Formulario</h3>
                    <h4>{Math.ceil(this.state.date / 1000)}</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" onChange={this.changeFirstName} />
                            <label htmlFor="first_name">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" onChange={this.changeLastName} />
                            <label htmlFor="last_name">Apellidos</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" onChange={this.changeEmail} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                </form>
                <div className="col s10 offset-s1">
                    <h3>{`Hola ${this.state.firstName} ${this.state.lastName}`}</h3>
                    <h3>{`Tu correo es: ${this.state.email}`}</h3>
                </div>

            </div>
        )
    }
    //componente que se usa depues del renderizado en el DOM
    componentDidMount() {
        this.intervalDate = setInterval(() => {
            this.changeDate()
        }, 1000)
    }

    //componente para acceder a las props previas y el stado previo.
    componentDidUpdate(prevProps, prevState) { }

    //componente para desmontar intervalos y reducir el peso de react.
    componentWillUnmount() {
        clearInterval(this.intervalDate)
    }

}

export default Form