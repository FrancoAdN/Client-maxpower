import React, { useContext } from 'react';
import './css/style.css';
import './css/style2.css';
import './css/font-awesome.css';
import banner29 from './images/banner29.jpg'; 
import { refProv } from '../../_useRefHook';

export default function HandCrafted() {
	const { handRef } = useContext(refProv);

	return (
		<div ref={handRef}>

		</div>
	);
}
