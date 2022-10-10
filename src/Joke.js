import React from "react"

function Joke(props) {
    return (
        <div className="joke">
            <p>Funny joke {props.index + 1}:</p>
            <p><b>{props.setup}</b></p>
            <i>{props.punch}</i>
        </div>
    )
}

export default Joke