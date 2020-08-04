import React, { createContext, useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'

export const SockContext = createContext()



export default function Store(props) {

    const socket = useRef()
    const [messages, setMessages] = useState([{ from: 0, msg: 'Bienvenido al chat!' }])
    const [connected, setConnected] = useState(false)
    const [server, setServer] = useState(false)
    const [user, setUser] = useState({})
    const userRef = useRef()
    const messagesRef = useRef()

    useEffect(() => {
        userRef.current = user
    }, [user])

    useEffect(() => {
        messagesRef.current = messages
    }, [messages])

    useEffect(() => {
        socket.current = io("http://api.maxpower-ar.com:3500")

        socket.current.on('server_message', (message) => {
            setMessages(messages => [...messages, message])
            console.log(message)
        })

        socket.current.on('server_disconnected', () => setServer(false))

        socket.current.on('existing_conv', () => {
            const client_data = { name: userRef.current.name, email: userRef.current.email, tel: userRef.current.tel, emp: userRef.current.emp, messages: messagesRef.current }
            socket.current.emit('client_existing_conv', client_data)
        })


        return () => {
            socket.current.disconnect()
        }
    }, [])


    const sendMessage = (data) => {
        setMessages(messages => [...messages, data])
        socket.current.emit("client_message", data)
    }

    const connectClient = (client) => {
        setUser(client)
        socket.current.emit('client_conn', client)
        setConnected(true)
        setServer(true)
    }

    return (
        <SockContext.Provider value={{ messages, sendMessage, connectClient, connected, server }}>
            {props.children}
        </SockContext.Provider>
    )
}