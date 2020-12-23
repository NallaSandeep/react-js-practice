import { Component } from "react"

class StateChangeExample extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Sandeep!',
            buttonText: 'Subscribe'
        }
    }

    changeMessage() {
        if (this.state.buttonText === 'Subscribe') {
            this.setState(
                {
                    message: 'Thank you for Subscribing!',
                    buttonText: 'Unsubscribe'
                }
            )
        } else {
            this.setState(
                {
                    message: 'Sorry for disappoiting you. Please subscribe again.',
                    buttonText: 'Subscribe'
                }
            )
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StateChangeExample