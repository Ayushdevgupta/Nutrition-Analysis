import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Word from './Word';
import '../../assets/styles/header.css';

const title = 'Nutrition Analysis';

function Heading() {
	useLayoutEffect(() => {
		const headingAnimation = gsap.fromTo(
			'.js-character',
			{
				y: '30vh',
				opacity: 0,
			},
			{
				y: '0vh',
				opacity: 1,
				ease: 'back(2)',
				stagger: { amount: 1.2 },
			}
		);
		return () => {
			headingAnimation.kill();
		};
	}, []);

	return (
		<h1 className='heading-primary'>
			{title.split(' ').map((word, index) => (
				<Word word={word} className='js-character' key={index} />
			))}
		</h1>
	);
}

export default Heading;
