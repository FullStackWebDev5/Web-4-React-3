const Student = ({ details, rollNo, likesIceCream }) => {
	const { name, batchNo, country, course } = details;
	return (
		<div>
			<h1>{name}</h1>
			<ul>
				<li>Roll No: {rollNo}</li>
				<li>Batch No: {batchNo}</li>
				<li>Course: {course}</li>
				<li>Country: {country}</li>
				<li>Icecream: {likesIceCream ? 'Likes icecream' : 'Does not like icecream'}</li>
			</ul>
		</div>
	)
}

export default Student