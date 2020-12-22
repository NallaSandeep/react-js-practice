import React, { Component } from "react"

class PropsExampleClass extends Component {
    render() {
        return (
            <div>
                <h1>Greetings {this.props.name}!!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default PropsExampleClass