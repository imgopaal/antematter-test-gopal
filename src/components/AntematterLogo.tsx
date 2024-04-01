import { ReactSVG } from 'react-svg'
import antematterLogo from '../assets/antematter.svg'
export default function AntematterLogo() {
	return (
		<div className="p-[26px] cursor-pointer grid place-items-center">
			<ReactSVG src={antematterLogo} />
		</div>
	)
}
