import { useRef } from 'react';
import Modal from './components/UI/Modal/Modal';
import Loader from './components/Loader/Loader';
import Message from './components/Message/Message';
import ErrorMessage from './components/Message/ErrorMessage';
import Header from './components/Header/Header';
import BgAnimation from './components/BgAnimation/BgAnimation';
import Instructions from './components/Instructions/Instructions';
import Form from './components/Form/Form';
import MainContent from './components/MainContent/MainContent';
import ListContainer from './components/ListContainer/ListContainer';
import Ingredients from './components/Ingredients/Ingredients';
import NutritionFacts from './components/NutritionFacts/NutritionFacts';
import Footer from './components/Footer/Footer';
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage';
import { useDataFetching } from './hooks/useDataFetching/useDataFetching';
import './assets/styles/style.css';

function App() {
	const [nutritionData, setNutritionData] =
		useLocalStorage('nutritionAnalysis');
	const { setIngredients, loader, error, setError } =
		useDataFetching(setNutritionData);

	let animationRef = useRef(null);

	const handleCloseMessage = (e) => {
		if (
			e.target.classList.contains('modal') ||
			e.target.classList.contains('message-btn')
		) {
			animationRef.current.reverse();
		}
	};

	return (
		<div className='main-container'>
			{loader && (
				<Modal>
					<Loader />
				</Modal>
			)}

			{error && (
				<Modal onClick={handleCloseMessage}>
					<Message
						error={error}
						setError={setError}
						animationRef={animationRef}
						onClick={handleCloseMessage}
					>
						<ErrorMessage message={error} />
					</Message>
				</Modal>
			)}

			<Header />

			<BgAnimation>
				<Instructions />
				<Form
					setIngredients={setIngredients}
					loader={loader}
					error={error}
					setError={setError}
				/>

				{nutritionData && (
					<MainContent>
						<ListContainer containerType='ingredients'>
							<Ingredients
								nutritionData={nutritionData.ingredients}
							/>
						</ListContainer>

						<ListContainer containerType='facts'>
							<NutritionFacts nutritionData={nutritionData} />
						</ListContainer>
					</MainContent>
				)}

				<Footer />
			</BgAnimation>
		</div>
	);
}

export default App;
