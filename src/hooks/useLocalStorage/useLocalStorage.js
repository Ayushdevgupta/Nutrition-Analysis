import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
	const [nutritionData, setNutritionData] = useState(() => {
		const storedData = localStorage.getItem(key);
		return storedData ? JSON.parse(storedData) : null;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(nutritionData));
	}, [key,nutritionData]);

	return [nutritionData, setNutritionData];
}
