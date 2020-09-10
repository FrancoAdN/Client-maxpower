import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/style2.css';
import './css/font-awesome.css';
import { refProv } from '../../_useRefHook';
import cccc from './images/cccc.jpg';
import ffff from './images/ffff.jpg';
import banner10 from './images/banner10.jpg';

export default function Prods() {
	const { prodRef } = useContext(refProv);
	return (
		<div ref={prodRef}>
			<section
				className="shipping-wthree"
				data-aos="zoom-in"
				data-aos-duration="1500"
			>
				<div className="shiopping-grids d-lg-flex">
					<div className="col-lg-4 shiopping-gd text-center">
						<div className="icon-gd">
							<span className="fa fa-truck" aria-hidden="true"></span>
						</div>
						<div className="icon-gd-info">
							<h3>
								{' '}
								STOCK EN VARIADORES <span>ATV930 90KW</span>{' '}
							</h3>
							<p>
								{' '}
								Disponemos de stock en variadores ATV930 90KW de{' '}
								<span> Schneider Electric</span>, comuníquese con nosotros para
								brindarle la ficha técnica y/o resolver sus dudas! Su consulta no
								molesta.{' '}
							</p>
						</div>
					</div>
					<div className="col-lg-4 shiopping-gd sec text-center">
						<div className="icon-gd">
							<span className="fa fa-users" aria-hidden="true"></span>
						</div>
						<div className="icon-gd-info">
							<h3 className="title-second"> SERVICIO DE ASISTENCIA TÉCNICA ONLINE </h3>
							<p className="desc-second">
								Hemos implementado un servicio de asistencia técnica online con
								video-llamadas, telefónico y whatsapp para poder asistir a las empresas.
							</p>
						</div>
					</div>
					<div className="col-lg-4 shiopping-gd text-center">
						<div className="icon-gd">
							{' '}
							<span className="fa fa-plane" aria-hidden="true"></span>
						</div>
						<div className="icon-gd-info">
							<h3>
								{' '}
								SEGUIMOS <span className="import">IMPORTANDO </span>PRODUCTOS{' '}
							</h3>
							<p>
								{' '}
								A pesar del <span className="import"> COVID-19 </span>, seguimos
								importando{' '}
								<span className="import"> productos eléctricos y electrónicos</span>{' '}
								para nuestros clientes. Estamos a su disposición, no dude en
								contactárnos!
							</p>
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
