import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Store from './components/Store'
import yahwaylogo from './assets/Yahway Logo.svg'
import Events from './components/Events'

function App() {

	return (
		<>
			<h1>Welcome</h1>
			<img src={yahwaylogo}></img>
			<nav>
				<ul className="flex justify-center space-x-4 bg-gray-800 p-4 text-white">
					<li><a href="#Store">Store</a></li>
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
