/* interface massageI {
    massage: string
}

let massage: massageI = {
    massage: "123"
}
 */
async function echoRequest() {

    let socket = await new WebSocket("wss://ws.postman-echo.com/raw");
    socket.onopen = (e)=>{
    console.log('onopen', e)
    socket.send('123massage')
}

/*     socket.onmessage = (e)=>{
        console.log('onmassage', e)
    } */
}

export default echoRequest
