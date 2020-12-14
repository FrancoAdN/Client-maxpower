import React, { useState, useContext } from 'react'
import axios from 'axios'
import './css/style.css'
import './css/font-awesome.css'
import { refProv } from '../../_useRefHook'

export default function Contact() {

    const { contactRef } = useContext(refProv)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emp, setEmp] = useState('')
    const [tel, setTel] = useState('')
    const [body, setBody] = useState('')


    const handleOnSubmit = (e) => {
        e.preventDefault()
        const contact = { name, email, tel, emp, body }
        axios.post('https://api.maxpower-ar.com/contact', contact)
        setName('')
        setEmail('')
        setTel('')
        setBody('')
        setEmp('')
    }

    return (
        <div ref={contactRef} data-aos="slide-right" data-aos-duration="3000">
            <section id="contact" class="contact_area pt-80 pb-130 animate__animated animate__fadeIn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact_form mt-40 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <div class="section_title pb-25">
                                    <h4 class="title"> Formulario </h4>
                                </div> 
                                
                                <form id="contact-form" onSubmit={(e) => handleOnSubmit(e)}>
                                    <div class="single_form">
                                        <input name="name" type="text" value={name} placeholder="Nombre y Apellido" required onChange={e => setName(e.target.value)} />
                                    </div> 
                                    
                                    <div class="single_form">
                                        <input name="email" type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} />
                                    </div> 
                                    
                                    <div class="single_form">
                                        <input name="subject" type="text" placeholder="Empresa" value={emp} required onChange={e => setEmp(e.target.value)} />
                                    </div> 
                                    
                                    <div class="single_form">
                                        <input name="number" type="text" placeholder="Telefono" value={tel} required onChange={e => setTel(e.target.value)} />
                                    </div> 
                                    
                                    <div class="single_form">
                                        <textarea name="message" placeholder="Mensaje" required value={body} onChange={e => setBody(e.target.value)}></textarea>
                                    </div> 
                                    
                                    <p class="form-message"></p>
                                    
                                    <div class="single_form">
                                        <button class="main-btn" type="submit"> Enviar </button>
                                    </div> 
                                </form>
                            </div> 
                        </div>
                        <div class="col-lg-6">
                            <div class="contact_info mt-40 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                <div class="section_title pb-25">
                                    <h4 class="title">Contactanos</h4>
                                </div> 
                                <p>Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.Lorem ipsum dolor sit consetetur sadipscing elitr, sed diamnonumy eirmod tempor inidunt ut labore et dolore.</p>
                                
                                <div class="single_info d-flex align-items-center">
                                    <div class="info_icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="info_content media-body">
                                        <p> (011)7524-1400 </p>
                                    </div>
                                </div> 
                                
                                <div class="single_info d-flex align-items-center">
                                    <div class="info_icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="info_content media-body">
                                        <p>ventas@maxpowerautomation.com</p>
                                    </div>
                                </div> 
                                
                                <div class="single_info d-flex align-items-center">
                                    <div class="info_icon">
                                        <i class="fa fa-globe"></i>
                                    </div>
                                    <div class="info_content media-body">
                                        <p>www.maxpower-ar.com</p>
                                    </div>
                                </div> 
                                
                                <div class="single_info d-flex align-items-center">
                                    <div class="info_icon">
                                        <i class="fa fa-map-marker"></i>
                                    </div>
                                    <div class="info_content media-body">
                                        <p> Belgrano 180, Ramos Mejia <br/> Buenos Aires, Argentina</p>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
        </div>
    )
}
