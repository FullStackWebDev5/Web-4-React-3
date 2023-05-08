import { useState } from 'react'

function Counter() {
	let [count, setCount] = useState(0)

	const incrementCount = () => {
		setCount(count + 1)
	}

	const decrementCount = () => {
		setCount(count - 1)
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<p style={{ fontSize: '8em', margin: '10px' }}>{count}</p>
			<button onClick={incrementCount}>Increment</button>
			<button onClick={decrementCount}>Decrement</button>
		</div>
	)
}

export default Counter

/*
	## Hooks:
	- States could only be created in class based component
	- After the coming of hooks, states could be created in functional component

	- 1. useState: create states in functional components
	- 2. useEffect: (TBD - Life cycle methods)

	## useState
	Syntax: let [state, stateHandler] = useState(defaultValue)
	Eg: let [count, setCount] = useState(0)

	# State Manipulation
	- stateHandler(newStateValue)
*/