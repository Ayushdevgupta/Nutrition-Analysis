import ContainerHeading from './ContainerHeading';
import Notation from './Notation';
import '../../assets/styles/list-container.css';


function ListContainer ({ containerType, children }) {
    return (
        <section className={`${containerType}-container`}>
            <ContainerHeading>
                {containerType === 'facts' ? 'Nutrition Facts' : 'List of Ingredients'}
            </ContainerHeading>

            {children}

            {containerType === 'facts' && <Notation />}
        </section>
    );
}


export default ListContainer;