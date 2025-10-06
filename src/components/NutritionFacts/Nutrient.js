import '../../assets/styles/facts.css';

const getValue = (nutrientCode, nutrients, digits = null) => {
	let string = '';
	const value = nutrients[nutrientCode]?.quantity?.toFixed(digits);
	const unit = nutrients[nutrientCode]?.unit;

	if (!value) return string;
	else if (Number(value) > 0) string = ` ${value} ${unit}`;
	else if (Number(value) === 0) string = ` 0 ${unit}`;

	return string;
};

function Nutrient({ nutrient, totalDaily, totalNutrients }) {
	const { nutrientName, nutrientCode, mainGroup, subGroup } = nutrient;

	return (
		<tr className='facts-table-cell'>
			<td className={subGroup ? 'js-space' : ''}>
				{mainGroup ? <strong>{nutrientName}</strong> : nutrientName}
				{getValue(nutrientCode, totalNutrients, 1)}
			</td>

			<td>
				<strong>{getValue(nutrientCode, totalDaily)}</strong>
			</td>
		</tr>
	);
}

export default Nutrient;
