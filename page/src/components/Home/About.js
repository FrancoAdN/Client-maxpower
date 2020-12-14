import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import certificate from './images/certificate.png';
import play from './images/play.png';
import './css/style.css';
import './css/style2.css';
import './css/font-awesome.css';
import { refProv } from '../../_useRefHook';

import Shape1 from './images/services-shape.svg';
import Shape2 from './images/services-shape-1.svg';
import Shape3 from './images/services-shape-2.svg';
import Shape4 from './images/services-shape-3.svg';
import banner from './images/banner5.jpg';
import dots from './images/dots.svg';
import aboutimg from './images/about_image2.jpg';

export default function About() {
	const { aboutRef } = useContext(refProv);
	const [video, setVideo] = useState(false)
	return (
		<div ref={aboutRef} data-aos="fade-right" data-aos-duration="1500">
			<section id="nosotros" class="services-area pt-120 animate__animated animate__slideInUp" >
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-10">
							<div class="section-title text-center pb-40">
								<div class="line m-auto"></div>
								<h3 class="title"><span> Somos </span> Maxpower <span> ,empresa que brinda soluciones integrales a las industrias con mas de 25 años de experiencia</span></h3>
							</div>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-7 col-sm-8">
							<div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
								<div class="services-icon">
									<img class="shape" src={Shape1} alt="shape"/>
									<img class="shape-1" src={Shape2}alt="shape"/>
									<i class="fa fa-briefcase"></i>
								</div>
								<div class="services-content mt-30">
									<h4 class="services-title"><a href="#"> Profesionales </a></h4>
									<p class="text">Nuestro trabajo, habla de nosotros, le garantizamos un excelente desempeño en nuestros servicios brindados para la satisfacción de nuestros clientes.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-7 col-sm-8">
							<div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
								<div class="services-icon">
									<img class="shape" src={Shape1} alt="shape"/>
									<img class="shape-1" src={Shape3} alt="shape"/>
									<i class="fa fa-handshake-o"></i>
								</div>
								<div class="services-content mt-30">
									<h4 class="services-title"><a href="#"> Confiables </a></h4>
									<p class="text">La confianza es un factor importante en el trabajo, es por ello que hacemos que nuestros clientes se sientan cómodos con nuestros servicios.</p>
								</div>
							</div>
                		</div>
						<div class="col-lg-4 col-md-7 col-sm-8">
							<div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
								<div class="services-icon">
									<img class="shape" src={Shape1} alt="shape"/>
									<img class="shape-1" src={Shape4} alt="shape"/>
									<i class="fa fa-thumbs-up"></i>
								</div>
								<div class="services-content mt-30">
									<h4 class="services-title"><a href="#">Eficientes</a></h4>
									<p class="text">Nos destacamos por garantizar entrega de productos a corto plazo, con una excelente calidad de empaquetado y asistencia durante su proceso.</p>
								</div>
							</div> 
						</div>
					</div> 
				</div> 
			</section>

			{/* <!-- Video Popup Section Start --> */} {/* <!-- CSS: Style 2--> */}

			<section id="nosotros" class="video-counter pt-70">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
								<img class="dots" src={dots} alt="dots"/>
								<div class="video-wrapper">
									<div class="video-image">
										<img src={banner} alt="video"/>
									</div>
									<div class="video-icon">
										<a href="https://www.youtube.com/watch?v=68A4khKy490&t=3s" class="video-popup"><i class="fa fa-play"></i></a>
									</div>
								</div> 
							</div> 
						</div>
						<div class="col-lg-6">
							<div class="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
								<div class="counter-content">
									<div class="section-title">
										<div class="line"></div>
										<h3 class="title"> <span> Nuestro video institucional </span></h3>
									</div> 
									<p class="text">Lanzamos en youtube nuestro nuevo video institucional, mostrando a nuestros clientes nuestra empresa, las areas y el trabajo que hacemos dia a dia para brindar la mejor atencion.</p>
								</div> 
							</div> 
						</div>
					</div> 
				</div> 
			</section>

			<VideoPopup video={video} setVideo={setVideo} />
			{/* <!-- Video Popup Section End --> */}
		</div>
	);
}


function VideoPopup({ video, setVideo }) {
	return (
		<Modal
			isOpen={video}
			onRequestClose={() => setVideo(false)}
			className={"popup-video"}>
			{/* Adentro de este div con html el video de youtube */}
			<iframe width="1024" height="576" src="https://www.youtube.com/embed/68A4khKy490" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
			</iframe>
		</Modal>
	)
}