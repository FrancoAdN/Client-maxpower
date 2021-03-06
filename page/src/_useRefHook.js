import React, { createContext, useRef } from 'react'


export const refProv = createContext()

export default function RefProvider(props) {

    const aboutRef = useRef(null)
    const featRef = useRef(null)
    const handRef = useRef(null)
    const contactRef = useRef(null)
    const prodRef = useRef(null)

    return (
        <refProv.Provider value={{ aboutRef, featRef, handRef, contactRef, prodRef }}>
            {props.children}
        </refProv.Provider>
    )
}