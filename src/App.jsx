import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import sign_up from './pages/sign_up'
function App() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/sign_up' element={<sign_up />} />
			<Route path='/map' element />
			<Route path='/shop' element />
			<Route path='/event' element />
			<Route path='/partners' element />
		</Routes>
		)
}

export default App
