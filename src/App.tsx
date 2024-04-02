import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

export default function App() {
	return (
		<div className="flex flex-row bg-background">
			<Sidebar />
			<Dashboard />
		</div>
	)
}
