import { data } from '../../data/data';
import Nutrient from './Nutrient';
import '../../assets/styles/facts.css';


function NutritionFacts ({ nutritionData }) {
    const { calories, totalDaily, totalNutrients } = nutritionData;

    return (
        <table className="facts-table">
            <thead>
                <tr className="facts-table-cell">
                    <th className="facts-table-subheading">
                        Amount Per Serving
                    </th>
                    <th></th>
                </tr>
                <tr className="facts-table-cell">
                    <th className="facts-table-heading">Calories</th>
                    <th className="facts-table-heading">{calories}</th>
                </tr>
            </thead>

            <tbody>
                <tr className="facts-table-cell">
                    <td></td>
                    <td className="notation">% Daily Value*</td>
                </tr>

                {
                    data.map((nutrient) => (
                        <Nutrient
                            nutrient={nutrient}
                            totalDaily={totalDaily}
                            totalNutrients={totalNutrients}
                            key={nutrient.id}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}


export default NutritionFacts;