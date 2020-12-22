//import React, { Component } from "react"

export const PropsExample = (props) => {
    return (
        <div>
            <h1>Greetings {props.name}!!</h1>
            {props.children}
        </div>
    )
}

export default PropsExample