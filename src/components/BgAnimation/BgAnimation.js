import Icon from './Icon';
import '../../assets/styles/background.css';


const ICONS_NUM = 10;


function BgAnimation ({ children }) {
    return (
        <section className='background-container'>
            {children}
            
            {
                Array.from({ length: ICONS_NUM }, (_, index) => (
                    <Icon 
                        index={index}
                        key={index}
                    />
                ))
            }
        </section>
    );
}


export default BgAnimation;