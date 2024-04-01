import AntematterLogo from './AntematterLogo'
import Notifications from './Notifications'
import homeIcon from '../assets/home.svg'
import nftIcon from '../assets/nft-listing.svg'
import settingsIcon from '../assets/settings.svg'
import RouteComponent from './RouteComponent'

export default function Sidebar() {
	const icons = [homeIcon, nftIcon, settingsIcon]
	return (
		<div className="flex flex-col justify-between h-screen bg-background w-[108px] py-6 px-[10px]">
			<AntematterLogo />
			<div className="flex flex-col items-center my-auto">
				{icons.map((icon, index) => (
					<RouteComponent key={index} icon={icon} />
				))}
			</div>
			<Notifications />
		</div>
	)
}
