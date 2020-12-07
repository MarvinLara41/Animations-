import React from 'react';

function Home(props) {
	const Animation = () => {
		const container = document.querySelector('.container');
		const text = document.querySelector('#text');
		const totalTime = 7500;
		const breatheTime = (totalTime / 5) * 2;
		const holdTime = totalTime / 5;

		breatheAnimation();

		function breatheAnimation() {
			text.innerHTML = 'MongoDB';

			container.className = 'container grow';

			setTimeout(() => {
				text.innerText = 'REACT';

				setTimeout(() => {
					text.innerText = 'Node.JS';
					container.className = 'container shrink';
				}, holdTime);
			}, breatheTime);
		}

		setInterval(breatheAnimation, totalTime);
	};

	return (
		<div className="home-container" id="/">
			<div className="container">
				<h1> Marvin Lara</h1>
				<h3>Full Stack Web Developer</h3>
				<div className="pointer">
					{window.addEventListener('load', Animation)}
				</div>
				<p id="text"></p>
			</div>
		</div>
	);
}

export default Home;
