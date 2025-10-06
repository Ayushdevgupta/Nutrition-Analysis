import badge from '../../assets/images/badge-edamam.svg';
import '../../assets/styles/footer.css';

function Attribution() {
	return (
		<figure className='attribution'>
			<a href='https://www.edamam.com/' target='_blank' rel='noreferrer'>
				<img src={badge} alt='Powered by Edamam' width='100%' />
			</a>
		</figure>
	);
}

export default Attribution;
