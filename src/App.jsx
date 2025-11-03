import './App.css'
import { Routes, Route } from 'react-router-dom'
import index from './pages/index.jsx'

function App() {
	return (
		<Routes>
			<Route path='/' element={<index />} />
		</Routes>
	)
}

export default App
