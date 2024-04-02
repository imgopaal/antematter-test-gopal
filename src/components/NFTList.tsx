import NFT from './NFT'
import nftImage1 from '../assets/nft_illustration_1.png'
import nftImage2 from '../assets/nft_illustration_2.png'
import nftImage3 from '../assets/nft_illustration_3.png'
import nftImage4 from '../assets/nft_illustration_4.png'
import { NFTType } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

// import required modules
import { Keyboard, Navigation } from 'swiper/modules'

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
			nftTitle: 'Jocker Monkey #7319',
			nftImage: nftImage4,
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
		<div className="pt-[74px] pb-14 px-[50px] w-full">
			<Swiper
				centeredSlides={false}
				slidesPerGroupSkip={1}
				grabCursor={true}
				keyboard={{
					enabled: true,
				}}
				centeredSlidesBounds
				breakpoints={{
					400: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
					1000: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					1300: {
						slidesPerView: 3,
						slidesPerGroup: 2,
					},
				}}
				scrollbar={false}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[Keyboard, Navigation]}
				className="mySwiper"
				spaceBetween={'33'}
				data-wm-plugin="section-slider"
			>
				{nftData.map((nft: NFTType) => {
					return (
						<SwiperSlide key={nft.nftId} className="flex items-center">
							<NFT data={nft} />
						</SwiperSlide>
					)
				})}
				<div className="bg-background p-[11px] rounded-full w-[295px] m-auto h-[78px] mt-[28px] "></div>
			</Swiper>
		</div>
	)
}
