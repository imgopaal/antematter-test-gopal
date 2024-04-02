import { ReactSVG } from 'react-svg'
import DashboardHeader from '../components/DashboardHeader'
import refreshIcon from '../assets/refresh.svg'
import { useEffect, useState } from 'react'
import NFTList from '../components/NFTList'

export default function Dashboard() {
	const [refresh, setRefresh] = useState(false)
	const [loading, setLoading] = useState(false)

	const load = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setRefresh(prev => !prev)
		}, 2000)
	}

	useEffect(() => {
		if (refresh) setRefresh(false)
	}, [refresh])

	return (
		<div className="h-screen w-[calc(100vw-108px)] bg-grey_3 rounded-tl-[2rem] rounded-bl-[2rem] overflow-y-scroll custom-scrollbar">
			<DashboardHeader />
			<div className="w-full py-5 px-16 rounded-tl-[32px] flex justify-between">
				<p className="text-primary_text text-[28px] font-medium">Dashboard</p>
				<button onClick={load} className="p-2 rounded-3  cursor-pointer bg-grey_1 rounded-xl">
					<ReactSVG src={refreshIcon} className={`text-primary_text ${loading && 'animate-spin'}`} />
				</button>
			</div>
			<NFTList />
		</div>
	)
}
