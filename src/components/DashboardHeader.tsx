import ethIcon from '../assets/eth.svg'
export default function DashboardHeader() {
	return (
		<div className="w-full py-5 px-16 rounded-tl-[32px] flex justify-between sticky top-0 bg-grey_3">
			<div className="bg-grey_2 rounded-[14px] py-2 px-3 gap-2 flex flex-row items-center">
				<img src={ethIcon} alt="react" className="h-6 w-6 rounded-full" />
				<p className="text-primary_text">ETH/USDT</p>
				<p className="text-success">1137.62 +2.62%↑</p>
			</div>
			<div className="bg-grey_2 rounded-[14px] py-2 px-3 gap-2 flex flex-row items-center">
				<img
					src="https://avatars.githubusercontent.com/u/24633393?v=4"
					alt="gopal"
					className="h-6 w-6 rounded-full"
				/>
				<p className="text-primary_text">zash</p>
				<div className="h-4 w-[2px] bg-grey_3"></div>
				<p className="text-primary_text">User ID: 11026666</p>
			</div>
		</div>
	)
}
