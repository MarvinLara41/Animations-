import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './particle.css';

class Particle extends Component {
	render() {
		const particle = {
			particles: {
				color: {
					value: '#000000',
				},
				number: {
					value: 50,
				},
				size: {
					value: 3,
				},
			},
			interactivity: {
				events: {
					onhover: {
						enable: true,
						mode: 'repulse',
					},
				},
			},
			style: {
				width: '100vw',
				height: `100vh`,
			},
		};

		return <Particles params={particle} className="particle" />;
	}
}

export default Particle;
