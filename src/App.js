import './App.css';
import Student from './components/Student'
// import Counter from './components/Counter'
// import EventHandling from './components/EventHandling'
// import SocialMediaExample from './components/SocialMediaExample'

function App() {
	let rishavDetails = {
		name: 'Rishav Sagar',
		batchNo: 5,
		course: 'MERN Stack',
		country: 'India',
		likesIcecream: true
	}
	let chandanDetails = {
		name: 'Chandan Pandey',
		batchNo: 7,
		course: 'MEVN Stack',
		country: 'USA',
		likesIcecream: false
	}
	let mayankDetails = {
		name: 'Mayank',
		batchNo: 3,
		course: 'MEAN Stack',
		country: 'UAE',
		likesIcecream: true
	}
  return (
    <div className="App">
			{/* <Counter /> */}
			<Student details={rishavDetails} />
			<Student details={chandanDetails} />
			<Student details={mayankDetails} />
			{/* <EventHandling /> */}
			{/* <SocialMediaExample /> */}
    </div>
  );
}

export default App;


/*
	# Components have 2 types of data: 
	- Props (Object): Data passed from the parent component to the child component
	- State (Object): Data owned by the component (private data)

	## A component will re-render (reload) whenever state/prop value changes
	- It will re-render with the new values of states and props

	## eventHandler: Use camelcase (Eg: onClick)
*/