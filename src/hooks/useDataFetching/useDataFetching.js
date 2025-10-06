import { useState, useEffect } from "react";


const ID = 'f2480e58';
const KEY = '383eca6d139f77381cab0dd74d17ad73';
const URL = `https://api.edamam.com/api/nutrition-details?app_id=${ID}&app_key=${KEY}`;


export function useDataFetching (setNutritionData) {
    const [ingredients, setIngredients] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (ingredients) => {
        try {
            setLoader(true);

            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingr: ingredients }),
            });

            if (response.status === 555) throw new Error('incorrect format');
            else if (!response.ok) throw new Error('error');

            const data = await response.json();
            
            setNutritionData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        if (!ingredients) return;
        
        getData(ingredients);
    }, [ingredients]);

    return { setIngredients, loader, error, setError };
};