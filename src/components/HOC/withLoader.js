import React, { Component } from 'react'


const widthLoader = (data) => (WrappedComponent) => {
    return class WidthLoader extends Component {
        constructor(props) {
            super(props)

            this.state = {

            }
        }

        render() {
            return (
                this.props[data].length === 0
                    ? <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    : <WrappedComponent {...this.props} />

            )
        }
    }
}

export default widthLoader