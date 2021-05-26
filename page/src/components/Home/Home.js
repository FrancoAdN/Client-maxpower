import React, { useEffect } from 'react'
import AOS from 'aos'
import MainContent from './MainContent'
import About from './About'
import Prods from './Prods'
import Features from './Features'
import HandCrafted from './HandCrafted'
import Contact from './Contact'
import Footer from './Footer'
import 'aos/dist/aos.css'
import Chat from '../Chat/Chat'

export default function Home() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            {/* <Chat /> */}
            <MainContent />
            <About />
            <Prods />
            <Features />
            <HandCrafted />
            <Footer />
        </div>
    )
}
