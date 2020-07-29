// import React, { useState, useContext, useEffect } from 'react'
// import './Chat.css'
// import { SockContext } from '../../_useChat'

// export default function Chat() {
//     const [text, setText] = useState('')
//     const { messages, sendMessage, connectClient, connected, server } = useContext(SockContext)


//     return (
//         <div>
//             <div id='chat' style={{ width: '350px', height: '460px', borderRadius: '10px', background: '#e2130b', border: '1px solid #e2130b', display: 'block' }}>
//                 <div className="w-100" style={{ height: '30px', color: '#fff' }}>
//                     <center><h5>Maxpower chat</h5></center>
//                 </div>
//                 <ChatBody con={connected} conFun={connectClient} messages={messages} server={server} />

//                 <div className="w-100 d-flex justify-content-around" style={{ height: '50px' }}>
//                     <div className="in-msg d-flex justify-content-around">
//                         <input
//                             type="text"
//                             value={text}
//                             onChange={e => setText(e.target.value)}
//                             onKeyDown={e => {
//                                 if (e.key === "Enter") {
//                                     e.preventDefault()
//                                     sendMessage({ from: 1, msg: text })
//                                     setText('')
//                                 }
//                             }}
//                         />
//                         <button type="button"
//                             className="btn mx-auto my-auto"
//                             style={{ borderRadius: '30px', background: '#ffffff' }}
//                             onClick={e => {
//                                 e.preventDefault()
//                                 sendMessage({ from: 1, msg: text })
//                                 setText('')
//                             }}
//                         >
//                             <img src="https://img.icons8.com/small/16/000000/filled-sent.png" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <button className="rounded-circle chat-btn" onClick={e => {
//                 e.preventDefault()
//                 const chat = document.getElementById('chat').style.display
//                 if (chat == 'block')
//                     document.getElementById('chat').style.display = 'none'
//                 else
//                     document.getElementById('chat').style.display = 'block'
//             }}>
//                 <img src="https://img.icons8.com/wired/40/000000/chat.png" alt="..." style={{ margin: '5px' }} />
//             </button>

//         </div>

//     )
// }

// function ChatMessage({ msg }) {
//     if (msg.from) {
//         // Message from client
//         return (<div style={{ margin: '10px' }}>
//             <span className="d-inline float-right" style={{ background: '#e2130b', padding: '10px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '30px', maxWidth: '70%', color: '#fff' }}>{msg.msg}</span>
//         </div>)
//     }
//     // Message from server
//     return (<div className="mw-75" style={{ margin: '15px', maxWidth: '70%' }}>
//         <span className="mw-75" style={{ background: '#e3e3e3', padding: '10px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '30px' }}>
//             {msg.msg}
//         </span>
//     </div >)

// }

// function PreConnectForm({ connect }) {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [emp, setEmp] = useState('')
//     const [tel, setTel] = useState('')
//     return (
//         <form
//             className="d-flex flex-column my-auto"
//             style={{
//                 marginTop: '50px',
//                 width: '350px',
//                 height: '380px',
//                 background: '#e3e3e3'
//             }}

//             onSubmit={
//                 e => {
//                     e.preventDefault()
//                     const client = { name, email, tel, emp }
//                     connect(client)
//                 }
//             }
//         >
//             <input type="text" value={name} placeholder="Nombre:" required style={{ margin: '15px' }} onChange={e => setName(e.target.value)} />
//             <input type="email" value={email} placeholder="Email:" required style={{ margin: '15px' }} onChange={e => setEmail(e.target.value)} />
//             <input type="text" value={emp} placeholder="Empresa:" required style={{ margin: '15px' }} onChange={e => setEmp(e.target.value)} />
//             <input type="tel" value={tel} placeholder="Teléfono:" pattern="[0-9]{3} [0-9]{4} [0-9]{4}" required style={{ margin: '15px' }} onChange={e => setTel(e.target.value)} />
//             <center><button
//                 type="submit"
//                 className="btn send-button"
//                 style={{
//                     width: '150px',
//                     background: '#e2130b',
//                     color: '#ffffff',
//                     marginTop: '15px',
//                     marginBottom: '15px',
//                 }}
//             >Conectarme</button></center>
//         </form>
//     )
// }

// function ChatBody({ con, conFun, messages, server }) {
//     if (con && server) {
//         return (
//             <div className="w-100 content d-flex flex-column overflow-auto" style={{ height: '380px', background: '#fff' }}>
//                 {
//                     messages.map((msg, i) => (
//                         <ChatMessage key={i} msg={msg} />
//                     ))
//                 }
//             </div>
//         )
//     } else if (con && !server) {
//         return (
//             <div className="w-100 content d-flex flex-column overflow-auto" style={{ height: '380px', background: '#fff' }}>
//                 <h4>Lo siento, no hay nadie para contestar en este momento.</h4>
//             </div>
//         )
//     }

//     return (
//         <PreConnectForm connect={conFun} />
//     )
// }

import React, { useState } from 'react'
import './style.css'

export default function Chat() {
    const [messages, setMessages] = useState([
        { from: 0, msg: 'Bienvenido al chat de maxpower' },
        { from: 0, msg: 'En que podemos ayudarte, que andas buscando' },
        { from: 1, msg: 'Buen día Maxpower, ando buscando un variador ATV' },
        { from: 1, msg: 'Necesito saber el precio y si tienen stock' },
        { from: 1, msg: 'test' },
    ])
    const [text, setText] = useState('')
    const [disp, setDisplay] = useState('none')

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            e.preventDefault()
            // sendMessage({ from: 1, msg: text })
            setText('')
        }
    }




    return (
        <div>
            <div id="smith-container" style={{ display: disp }}>
                <div className="smith-chat-frame e5">
                    <div id="smith-chat-container">
                        <div className="smith-chat">
                            <div className="smith-chat-header background-brand">
                                <div className="smith-chat-header-overlay">
                                    <div className="smith-header-profile">
                                        <div className="smith-header-profile-avatar e2">
                                            <img src="http://api.maxpower-ar.com/imagen/logo.png" />
                                        </div>
                                        <div className="smith-header-profile-name"> MAXPOWER </div>
                                        <div className="smith-header-profile-intro">
                                            <span> Puedes comunicarte con nosotros a traves de nuestro chat online. Te atenderemos en instantes.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="smith-chat-body">
                                <div className="smith-conversation-container">
                                    <div className="smith-conversation-body-parts">
                                        <div className="smith-conversation-parts-wrapper">
                                            <div className="smith-conversation-parts">

                                                {
                                                    messages.map((msg, i) => (
                                                        <PrintMessage msg={msg} key={i} />
                                                    ))
                                                }


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="smith-chat-bar">
                        <div className="smith-chat-bar-message">
                            <input placeholder="Escriba su mensaje" value={text} onChange={e => setText(e.target.value)}
                                onKeyDown={handleKeyDown} />
                            <button type="button" className="btn send-btn" onClick={e => {
                                e.preventDefault()
                                // sendMessage({ from: 1, msg: text })
                                setText('')
                            }}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

            <LaunchCircle display={disp} set={setDisplay} />

        </div>
    )
}


function PrintMessage({ msg }) {
    if (msg.from) {
        //Message from client
        return (
            <div className="smith-conversation-part smith-conversation-part-guest">
                <div className="smith-comment-container smith-comment-container-guest">
                    <div className="smith-comment e1 background-brand f-right">
                        <div className="smith-blocks ">
                            <div className="smith-block smith-block-paragraph" style={{ color: '#fff' }}>{msg.msg}</div>
                        </div>
                    </div>
                    <div className="smith-timestamp">
                        {/* <span> time </span> <!-- Time --> */}
                    </div>
                </div>
            </div>

        )
    }

    // Message from server
    return (
        <div className="smith-conversation-part smith-conversation-part-admin">
            <div className="smith-comment-container smith-comment-container-admin">
                <div className="smith-comment-container-admin-avatar">
                    <div className="smith-avatar e2">
                        <img src="http://api.maxpower-ar.com/imagen/logo.png" />
                    </div>
                </div>
                {/* <!-- Message Admin --> */}
                <div className="smith-comment e1">
                    <div className="smith-blocks">
                        <div className="smith-block smith-block-paragraph">{msg.msg}</div>
                    </div>
                </div>
                <div className="smith-timestamp">
                    {/* <span> time </span>  */}
                </div>
            </div>
        </div>

    )
}

function LaunchCircle({ display, set }) {
    const handleClick = (e) => {
        e.preventDefault()
        if (display === 'block') set('none')
        else set('block')
    }
    return (
        <div id="launch" className="smith-launcher-frame e5" onClick={handleClick}>
            <div className="smith-launcher">
            </div>
        </div>
    )
}