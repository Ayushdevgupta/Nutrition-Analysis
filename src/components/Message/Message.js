import { useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import Button from '../UI/Button/Button';
import '../../assets/styles/message.css';

function Message({ error, setError, animationRef, onClick, children }) {
	useLayoutEffect(() => {
		animationRef.current = gsap.timeline({
			paused: true,
			onReverseComplete: () => setError(''),
		});

		animationRef.current.to('.message-container', {
			top: '20vh',
			opacity: 1,
			ease: 'back(2)',
			duration: 0.7,
		});

		return () => {
			animationRef.current.kill();
		};
	}, []);

	useEffect(() => {
		if (!error) return;

		animationRef.current.play();
	}, [error]);

	return (
		<div className='message-container'>
			{children}

			<Button className='message-btn' type='button' onClick={onClick}>
				Ok
			</Button>
		</div>
	);
}

export default Message;
