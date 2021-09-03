import React from 'react'

function Button(props) {
    return (
        <a className="buttons">
           {props.name}
        </a>
    )
}

export default Button
