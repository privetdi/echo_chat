import React from "react";

export interface massageI {
    id: number,
    sender: string,
    massage: string
}

function Messages(props: massageI): React.ReactElement{
    return(<div>
        <h1 className={props.sender}>{props.massage}</h1>
    </div>)
}

export default Messages;