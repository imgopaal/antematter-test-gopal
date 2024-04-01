import { ReactSVG } from 'react-svg'
import notificationLogo from '../assets/notifications.svg'
export default function Notifications() {
	return (
		<div className="p-[26px] cursor-pointer grid place-items-center relative text-unselected_state">
			<div
				className={`h-[7px] w-[7px] border-[1.7px] rounded-full bg-white absolute top-[28px] right-[36px] border-black `}
			></div>
			<ReactSVG src={notificationLogo} />
		</div>
	)
}
