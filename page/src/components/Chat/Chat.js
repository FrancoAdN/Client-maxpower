
import React, { useState, useContext } from 'react'
import { SockContext } from '../../_useChat'
import './style.css'
import './responsive.css'
// import icon from './chat-icon.png'

export default function Chat() {

    const { messages, sendMessage, connectClient, connected, server } = useContext(SockContext)

    const [text, setText] = useState('')
    const [disp, setDisplay] = useState('none')

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {
            e.preventDefault()
            sendMessage({ from: 1, msg: text })
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

                            <ChatBody con={connected} conFun={connectClient} messages={messages} server={server} />



                        </div>
                    </div>
                    <div className="smith-chat-bar">
                        <div className="smith-chat-bar-message">
                            <input placeholder="Escriba su mensaje" value={text} onChange={e => setText(e.target.value)}
                                onKeyDown={handleKeyDown} />
                            <button type="button" className="btn send-btn" onClick={e => {
                                e.preventDefault()
                                sendMessage({ from: 1, msg: text })
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
                {/* <img src={icon} alt="icon" /> */}
            </div>
        </div>
    )
}

function ContactForm({ connect }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emp, setEmp] = useState('')
    const [tel, setTel] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const client = { name, email, tel, emp }
        connect(client)
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading text-center">
                <h2> Bienvenido a nuestro chat</h2>
                <p> Debe completar el formulario de contacto <br /> para poder continuar. </p>
            </div>
            <div className="contact-form-container">
                <input type="text" placeholder="Nombre" value={name} className="name" onChange={e => setName(e.target.value)} />
                <input type="tel" placeholder="Telefono" value={tel} className="phone" onChange={e => setTel(e.target.value)} />
                <input type="email" placeholder="Email" value={email} className="email" onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="Empresa" value={emp} className="empresa" onChange={e => setEmp(e.target.value)} />
                <button className="send text-center" type="submit"> Enviar datos </button>
            </div>
        </form>
    )
}


function ChatBody({ con, conFun, messages, server }) {
    if (con && server) {
        return (
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

        )
    } else if (con && !server) {
        return (
            <div>
                <PrintMessage msg={{ from: 0, msg: 'Gracias por comunicarse con Maxpower, en este momento no podemos antenderlo, vuelva más tarde o comuniquse vía email a la dirección ventas@maxpowerautomation.com.' }} />
                <PrintMessage msg={{ from: 0, msg: 'Muchas gracias!' }} />
            </div>
        )
    }

    return (
        <ContactForm connect={conFun} />
    )
}