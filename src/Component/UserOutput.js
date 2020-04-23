import React from "react"

const UserOutput = (props) => {
    return (
        <div>
            <p>Welcome to Output handler</p>
            <p> Your name: {props.name} </p>
        </div>
    )
}

export default UserOutput;