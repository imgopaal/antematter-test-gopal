import NFT from './NFT'
import nftImage1 from '../assets/nft_illustration_1.png'
import nftImage2 from '../assets/nft_illustration_2.png'
import nftImage3 from '../assets/nft_illustration_3.png'
import { NFTType } from '../../types'

export default function NFTList() {
	const nftData = [
		{
			nftId: 'iu010274',
			nftTitle: 'Cyberlink #2551',
			nftImage: nftImage1,
			nftInfo: [
				{
					title: 'Owner',
					value: '72UGr...YdD',
				},
				{
					title: 'Mint Address',
					value: '72UGr...YdD',
				},
				{
					title: 'Token Address',
					value: '72UGr...YdD',
				},
			],
		},
		{
			nftId: 'iu2362',
			nftTitle: 'The Eyedeas #1029',
			nftImage: nftImage2,
			nftInfo: [
				{
					title: 'Owner',
					value: '72UGr...YdD',
				},
				{
					title: 'Mint Address',
					value: '72UGr...YdD',
				},
				{
					title: 'Token Address',
					value: '72UGr...YdD',
				},
			],
		},
		{
			nftId: 'iu43247',
			nftTitle: 'Zombies #7919',
			nftImage: nftImage3,
			nftInfo: [
				{
					title: 'Owner',
					value: '72UGr...YdD',
				},
				{
					title: 'Mint Address',
					value: '72UGr...YdD',
				},
				{
					title: 'Token Address',
					value: '72UGr...YdD',
				},
			],
		},
		{
			nftId: 'iu43247e3',
			nftTitle: 'Zombies #7919',
			nftImage: nftImage3,
			nftInfo: [
				{
					title: 'Owner',
					value: '72UGr...YdD',
				},
				{
					title: 'Mint Address',
					value: '72UGr...YdD',
				},
				{
					title: 'Token Address',
					value: '72UGr...YdD',
				},
			],
		},
	]
	return (
		<div className="pt-[74px] pb-14 px-[50px] grid grid-cols-3 gap-[33px] w-full">
			{nftData.map((nft: NFTType) => {
				return <NFT key={nftData.nftId} data={nft} />
			})}
		</div>
	)
}
