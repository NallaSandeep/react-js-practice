import React, { Component } from "react"

class JSXExample extends Component {
    render() {
        // return (
        //     <div>
        //         <h1>Sandeep</h1>
        //     </div>
        // )

        return React.createElement(
            'div',
            { id: 'idName', className: 'className1' },
            React.createElement(
                'h1',
                null,
                'Vidyanath'
            )
        )
    }
}

export default JSXExample