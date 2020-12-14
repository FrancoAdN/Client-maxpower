import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { refProv } from '../../_useRefHook';
import './css/style.css';
import './css/style2.css';
import './css/font-awesome.css';
import aboutimg from './images/about_image2.jpg';

export default function Features() {
	const [reparaciones, setReparaciones] = useState(false);
	const [diagnostico, setDiagnostico] = useState(false);
	const [mantenimiento, setMantenimiento] = useState(false);
	const [capacitacion, setCapacitacion] = useState(false);
	const [armonicos, setArmonicos] = useState(false);
	const [termografia, setTermografia] = useState(false);
	const [atencion, setAtencion] = useState(false);

	const { featRef } = useContext(refProv);

	return (
		<div ref={featRef}>
			<div
				className="welcome py-5"
				id="features"
				data-aos="slide-left"
				data-aos-duration="1500"
			>
				<div className="container py-xl-5 py-lg-3">
					<div className="row">
						{/* MODAL REPARACIONES */}
						<Modal
							isOpen={reparaciones}
							onRequestClose={() => setReparaciones(false)}
							className={"modal-md"}
						>
							<h5>
								<span className="fa fa-wrench s2" style={{ marginRight: '5px' }}></span>
								Reparaciones
							</h5>
							<p style={{ marginTop: '10px' }}>
								Contamos con un laboratorio electrónico especializado en reparaciones
								para la automatización industrial, ofreciendo reparación de placas
								electrónicas.
							</p>
						</Modal>

						{/* MODAL DIAGNOSTICO */}
						<Modal
							isOpen={diagnostico}
							onRequestClose={() => setDiagnostico(false)}
							className={'modal-md'}
						>
							<h5>
								<span
									className="fa fa-tachometer s4"
									style={{ marginRight: '5px' }}
								></span>
								Diagnóstico
							</h5>
							<p style={{ marginTop: '10px' }}>
								Contamos también con nuestro servicio de diagnóstico y cotización de
								equipos sin cargo para nuestros clientes brindando el mejor servicio
								para ellos.
							</p>
						</Modal>

						{/* MODAL MANTENIMIENTO */}
						<Modal
							isOpen={mantenimiento}
							onRequestClose={() => setMantenimiento(false)}
							className={'modal-md'}
						>
							<h5>
								<span
									className="fa fa-briefcase s3"
									style={{ marginRight: '5px' }}
								></span>
								Mantenimiento
							</h5>
							<p style={{ marginTop: '10px' }}>
								Contamos también con nuestro servicio de diagnóstico y cotización de
								equipos sin cargo para nuestros clientes brindando el mejor servicio
								para ellos.
							</p>
						</Modal>

						{/* MODAL CAPACITACIONES */}
						<Modal
							isOpen={capacitacion}
							onRequestClose={() => setCapacitacion(false)}
							className={'modal-lg'}
						>
							<h5>
								<span
									className="fa fa-address-card-o s5"
									style={{ marginRight: '5px' }}
								></span>
								Capacitaciones
							</h5>
							<p style={{ marginTop: '10px' }}>
								Realizamos capacitaciones en cuanto a la programación y puesta en marcha
								de variadores de velocidad, arrancadores suaves y PLC. Ademas, se
								capacita en el armado y construcción de tableros eléctricos, haciendo
								pruebas de aislación y funcionamiento del mismo.
							</p>
						</Modal>

						{/* MODAL ARMONICOS */}
						<Modal
							isOpen={armonicos}
							onRequestClose={() => setArmonicos(false)}
							className={'modal-lg'}
						>
							<h5>
								<span
									className="fa fa-spinner s6"
									style={{ marginRight: '5px' }}
								></span>
								Medición de armónicos
							</h5>
							<p style={{ marginTop: '10px' }}>
								Realizamos toma de mediciones en diferentes puntos de prueba, y en base
								a los resultado de la misma se conforma un informe técnico donde se
								brindaran recomendaciones sobre el sistema eléctrico tratado previamente
								por nuestro departamento.
							</p>
						</Modal>

						{/* MODAL TERMOGRAFIA */}
						<Modal
							isOpen={termografia}
							onRequestClose={() => setTermografia(false)}
							className={'modal-md'}
						>
							<h5>
								<span
									className="fa fa-podcast s1"
									style={{ marginRight: '5px' }}
								></span>
								Estudios de termografía
							</h5>
							<p style={{ marginTop: '10px' }}>
								Realizamos mediciones termográficas con cámara FLUKE calibrada y
								entregamos informes de diagnóstico con posibles mantenimientos y
								correcciones a realizar.
							</p>
						</Modal>

						{/* MODAL ATENCION */}
						<Modal
							isOpen={atencion}
							onRequestClose={() => setAtencion(false)}
							className={'modal-md'}
						>
							<h5>
								<span
									className="fa fa-handshake-o s7"
									style={{ marginRight: '5px' }}
								></span>
								Atención al cliente
							</h5>
							<p style={{ marginTop: '10px' }}>
								Nos caracterizamos por brindar un excelente servicio y ayuda a nuestros
								clientes en cuanto a información y gestión resolviendo sus dudas
								satisfactoriamente.
							</p>
						</Modal>

						<div
							className="col-lg-5 welcome-left"
							data-aos="fade-right"
							data-aos-duration="4000"
						>
							<p>¿Por qué elegirnos?</p>
							<h3
								className="tittle-wthree mt-2 mb-3"
								data-aos="fade-left"
								data-aos-duration="4000"
							>
								Nuestros servicios a su disponibilidad
							</h3>

							<p
								className="mt-4 pr-lg-5"
								data-aos="fade-right"
								data-aos-duration="4000"
							>
								Estos son algunos de nuestros servicios en los cuales nos
								especializamos. Brindamos un excelente desempeño y un trabajo
								profesional en nuestras tareas, dando seguridad y confianza a nuestros
								clientes.
							</p>
							<p className="mt-4 pr-lg-5">
								{' '}
								<span className="features-span">
									¡Podes ver más acerca de nuestros servicios haciendo click en ellos!{' '}
								</span>
							</p>
						</div>
						<div className="col-lg-7 welcome-right text-center mt-lg-0 mt-5">
							<div className="row">
								<div className="col-sm-4 service-1-w3ls serve-gd2">
									<div
										className="serve-grid mt-3 s1"
										onClick={() => setReparaciones(true)}
										data-aos="fade-left"
										data-aos-duration="3000"
									>
										<span className="fa fa-wrench"></span>
										<p className="mt-2">Reparaciones</p>
									</div>
									<div
										className="serve-grid mt-4 s2"
										onClick={() => setMantenimiento(true)}
										data-aos="fade-left"
										data-aos-duration="3000"
									>
										<span className="fa fa-briefcase"></span>
										<p className="mt-2">Mantenimiento</p>
									</div>
								</div>
								<div className="col-sm-4 service-1-w3ls serve-gd3">
									<div
										className="serve-grid mt-4 s3"
										onClick={() => setDiagnostico(true)}
										data-aos="fade-right"
										data-aos-duration="3000"
									>
										<span className="fa fa-tachometer"></span>
										<p className="mt-2">Diagnóstico</p>
									</div>
									<div
										className="serve-grid mt-4"
										onClick={() => setCapacitacion(true)}
										data-aos="flip-right"
										data-aos-duration="3000"
									>
										<span className="fa fa-address-card-o"></span>
										<p className="text-li mt-2">Capacitaciones</p>
									</div>
									<div
										className="serve-grid mt-4 s1"
										onClick={() => setArmonicos(true)}
										data-aos="fade-left"
										data-aos-duration="3000"
									>
										<span className="fa fa-spinner"></span>
										<p className="mt-2">Armónicos</p>
									</div>
								</div>
								<div className="col-sm-4 service-1-w3ls serve-gd2">
									<div
										className="serve-grid mt-4 s2"
										onClick={() => setTermografia(true)}
										data-aos="fade-right"
										data-aos-duration="3000"
									>
										<span className="fa fa-podcast"></span>
										<p className="mt-2">Termografía</p>
									</div>
									<div
										className="serve-grid mt-4"
										onClick={() => setAtencion(true)}
										data-aos="fade-right"
										data-aos-duration="3000"
									>
										<span className="fa fa-handshake-o"></span>
										<p className="mt-2">Atención</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="about_area pt-80 pb-130">
				<div class="about_bg d-none d-lg-block">
					<div class="about_bg_image bg_cover">
					</div>
				</div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6">
							<div class="about_image mt-50">
								<img src={aboutimg} alt="About"/>
							</div> 
						</div>
						<div class="col-lg-6">
							<div class="about_content mt-50">
								<h3 class="sub_title"><span>+25</span> Años de experiencia </h3>
								<h4 class="main_title">Maxpower Industrial Automation </h4>
								<p>MaxPower es una empresa que brinda soluciones integrales a las industrias. Contamos con más de 25 años de experiencia y debido a la formación profesional en los distintos campos de acción, ofrecemos asesoramiento especializado en las diferentes áreas de las empresas, anticipándonos a sus necesidades actuales y futuras, mejorando el funcionamiento de los procesos continuos a través de la excelencia y la calidad.</p>
							</div> 
						</div>
					</div> 
				</div> 
			</div>

		</div>
	);
}
