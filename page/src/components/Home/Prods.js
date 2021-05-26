import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/style2.css';
import './css/font-awesome.css';
import { refProv } from '../../_useRefHook';
import cccc from './images/cccc.jpg';
import ffff from './images/ffff.jpg';
import banner10 from './images/banner10.jpg';

import Sshape from './images/plan-shape.svg';
import Phone from './images/plan-img2.png';

export default function Prods() {
	const { prodRef } = useContext(refProv);
	return (
		<div ref={prodRef}>
			<section id="tracking" class="tracking-section pt-150" data-aos="zoom-in" data-aos-duration="1500">
				<div class="tracking-shape">
					<img src={Sshape} alt="" class="shape shape-1"/>
				</div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6 col-xl-7">
							<div class="tracking-image">
								<img src={Phone} alt=""/>
							</div>
						</div>
						<div class="col-lg-6 col-xl-5">
							<div class="tracking-content">
								<div class="section-title mb-50">
									<h1 class="mb-40 wow fadeInUp" data-wow-delay=".2s"> Enterate de nuestras ultimas novedades </h1>
									<p class="wow fadeInUp" data-wow-delay=".4s"> Todas las semanas subimos nuevo contenido a nuestra redes sociales como, informacion sobre nosotros, nuevos productos, nuevos servicios, ofertas y mucho mas! </p>
								</div>
								<div class="single-plan">
									<div class="icon-style color-1">
										<i class="fa fa-archive"></i>
									</div>
									<div class="content">
										<h3> Stock en Variador ATV930</h3>
										<p>Disponemos de stock en variadores ATV930 90KW de Schneider Electric.</p>
									</div>
								</div>
								<div class="single-plan">
									<div class="icon-style color-2">
										<i class="fa fa-wrench"></i>
									</div>
									<div class="content">
										<h3>Asistencia Tecnica Online</h3>
										<p>Hemos implementado un servicio de asistencia técnica online con video-llamadas, telefónico y whatsapp para poder asistir a las empresas.</p>
									</div>
								</div>
								<div class="single-plan">
									<div class="icon-style color-3">
										<i class="fa fa-plane"></i>
									</div>
									<div class="content">
										<h3>Seguimos importando productos</h3>
										<p>A pesar del COVID-19 , seguimos importando productos eléctricos y electrónicos para nuestros clientes.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className="mid-section animate__animated animate__zoomIn"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<div className="d-lg-flex p-0">
					<div className="prod-electricos col-lg-6 bottom-w3pvt-left p-lg-0">
						<img src={cccc} className="img-fluid" alt="" />
						<div className="pos-wthree">
							<h4 className="text-wthree">
								Nuestros <br /> Productos eléctricos
							</h4>

							<Link to={'/productos-electricos'} className="btn shop mt-3">
								Ver
							</Link>
						</div>
					</div>
					<div className="prod-electronicos col-lg-6 bottom-w3pvt-left bottom-w3pvt-right p-lg-0">
						<img src={ffff} className="img-fluid" alt="" />
						<div className="pos-w3pvt">
							<h4 className="text-w3pvt">
								Nuestros <br /> Productos electrónicos{' '}
							</h4>

							<Link to={'/productos-electronicos'} className="btn shop mt-3">
								Ver
							</Link>
						</div>
					</div>
				</div>
				<div className="prod-ind">
					<img src={banner10} className="img-fluid" alt="" />
					<div className="pos-ind">
						<h4 className="text-w3pvt">
							Nuestros <br /> Productos industriales{' '}
						</h4>

						<Link to={'/productos-industriales'} className="btn shop mt-3">
							Ver
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
