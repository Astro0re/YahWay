import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Store from './components/Store'
import yahwaylogo from './assets/Yahway Logo.svg'
import Events from './components/Events'
import App_2 from './App_2.jsx'

function App() {

	return (
		<>
			<h1>Welcome</h1>
			<img src={yahwaylogo}></img>
			<nav className="flex justify-center space-x-4 bg-gray-800 p-4 text-white">
				<ul>
					<li><a href="Map">Map</a></li>
					<li><a href="Store">Store</a></li>
					<li><a href="Events">Events</a></li>
					<li><a href="Partners">Partners</a></li>
					<li><a href="Sign-up">Sign-up</a></li>
				</ul>
			</nav>
			<Header/>
			<Store />
			<Events />
			<Footer />
		</>
	)
}

export default App
