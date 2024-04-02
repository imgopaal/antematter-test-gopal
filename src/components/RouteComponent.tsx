import { useState } from 'react'
import { ReactSVG } from 'react-svg'

export default function RouteComponent({ icon }: any) {
	const [active, setActive] = useState(false)
	const toggle = () => setActive(prev => !prev)
	return (
		<button
			onClick={toggle}
			className={`p-[26px] cursor-pointer grid place-items-center  hover:text-primary_text group ${
				active ? 'text-primary_text' : 'text-unselected_state'
			}`}
		>
			<div
				className={`h-10 w-[2px] group-hover:bg-primary_text absolute left-0 ${
					active ? 'bg-primary_text' : 'text-transparent'
				}`}
			></div>
			<ReactSVG src={icon} />
		</button>
	)
}
