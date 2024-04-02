import { ReactSVG } from 'react-svg'
import moreIcon from '../assets/more.svg'
import type { NFTInfoType, NFTType } from '../../types.ts'

export default function NFT({ data }: { data: NFTType[] }) {
	const { nftId, nftTitle, nftImage, nftInfo }: NFTType = data
	return (
		<div className="rounded-[1.25rem] bg-background p-3 max-w-[388px] min-w-[388px] cursor-pointer">
			<div className="py-1 px-2 flex flex-row justify-between w-full items-center mb-[2px]">
				<p className="text-primary_text">{nftTitle}</p>
				<ReactSVG src={moreIcon} className="cursor-pointer" />
			</div>
			<img src={nftImage} alt="nft 1" className="h-[364px] w-full mb-[18px] rounded-lg" />
			<div className="bg-grey_2 p-2 grid grid-cols-1 gap-3 rounded-xl">
				{nftInfo.map((info: NFTInfoType, index: number) => {
					const { title, value } = info
					return (
						<div key={index} className="bg-grey_1 flex flex-row justify-between py-2 px-[10px] rounded-lg">
							<p className="text-primary_text">{title}</p>
							<div className="flex flex-row items-center">
								<div className="bg-[#424345] rounded-full h-4 w-[.4px]"></div>
								<p className="text-grey_5 pl-3">{value}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
