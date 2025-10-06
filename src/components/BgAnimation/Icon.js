import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import icon from '../../assets/images/icon-avocado.png';
import '../../assets/styles/background.css';

const xPosition = [
	'4%',
	'15%',
	'21%',
	'32%',
	'40%',
	'52%',
	'62%',
	'73%',
	'85%',
	'93%',
];
const delayTime = [9, 3, 5, 1, 7, 4, 10, 8, 2, 6];

function Icon({ index }) {
	useLayoutEffect(() => {
		const iconAnimation = gsap.fromTo(
			`.js-icon-${index}`,
			{
				bottom: '-10%',
				left: xPosition[index],
				opacity: 1,
				rotation: 0,
			},
			{
				bottom: '110%',
				left: xPosition[index],
				opacity: 0.4,
				rotation: 360,
				ease: 'linear.inOut',
				delay: delayTime[index],
				duration: 10,
				repeat: -1,
			}
		);

		return () => {
			iconAnimation.kill();
		};
	}, []);

	return (
		<figure className={`icon js-icon-${index}`}>
			<img src={icon} alt='Avocado Icon' width='100%' />
		</figure>
	);
}

export default Icon;
