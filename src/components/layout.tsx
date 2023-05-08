import React, { useEffect } from "react";
import echoRequest from "../api/echo";
import Messages from "./message";

function Layout():React.ReactElement{
    useEffect(()=> {   echoRequest()})

    return(<h1></h1>)
}
export default Layout

