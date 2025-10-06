import '../../assets/styles/ingredients.css'


function Ingredient ({ ingredient }) {
    const { food, measure, quantity, nutrients, weight } = ingredient;

    return (
        <tr className='ingredients-table-cell'>
            <td>{quantity}</td>
            <td>{measure}</td>
            <td>{food.charAt(0).toUpperCase() + food.slice(1)}</td>
            <td>{weight.toFixed(1)} g</td>
            <td>{nutrients.ENERC_KCAL.quantity.toFixed(1) + ' ' + nutrients.ENERC_KCAL.unit}</td>
        </tr>
    );
}


export default Ingredient;