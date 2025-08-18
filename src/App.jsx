import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Store from './components/Store'
import yahwaylogo from './assets/Yahway Logo.svg'

function App() {

	return (
		<>
			<img src={yahwaylogo}></img>
			<Header/>
			<Store />
			<Footer />
		</>
	)
}

export default App
