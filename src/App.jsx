import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import sign_up from './pages/sign_up'
import store from './pages/Store'
import Events from './pages/Events'
import Maps from './pages/Maps'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/sign_up' element={<sign_up />} />
			<Route path='/map' element={<Maps/>} />
			<Route path='/shop' element={<store/>} />
			<Route path='/event' element={<Events/>} />
			<Route path='/partners' element />
		</Routes>
		)
}

export default App
