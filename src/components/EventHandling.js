const EventHandling = () => {
	const sayHi = () => {
		alert('Hi')
	}

	return (
		<div>
			<button onClick={() => sayHi()}>Say Hi</button><br />
			<button onClick={sayHi}>Say Hi</button>
		</div>
	)
}

export default EventHandling