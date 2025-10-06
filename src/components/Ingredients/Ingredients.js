import Ingredient from './Ingredient';
import '../../assets/styles/ingredients.css'


function Ingredients({ nutritionData }) {
    return (
        <table className="ingredients-table">
            <thead>
                <tr className="ingredients-table-heading">
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Food</th>
                    <th>Weight</th>
                    <th>Calories</th>
                </tr>
            </thead>

            <tbody>
                {
                    nutritionData.map((ingredient, index) => {
                        return (
                            <Ingredient
                                ingredient={ingredient.parsed[0]}
                                key={index}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    );
}


export default Ingredients;