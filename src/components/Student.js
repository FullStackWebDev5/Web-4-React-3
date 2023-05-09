const Student = ({ details }) => {
	const { name, batchNo, country, course, likesIcecream } = details;
	return (
		<div>
			<h1>{name}</h1>
			<ul>
				<li>Batch No: {batchNo}</li>
				<li>Course: {course}</li>
				<li>Country: {country}</li>
				{likesIcecream && <li>This student likes Icecream</li>}
			</ul>
		</div>
	)
}

export default Student