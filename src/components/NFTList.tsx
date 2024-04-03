import { Swiper, SwiperSlide } from 'swiper/react'
import type { NFTType } from '../../types'
import NFT from './NFT'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles.css'

import { Keyboard, Navigation } from 'swiper/modules'

import { Metaplex } from '@metaplex-foundation/js'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import { useEffect, useState } from 'react'

const connection = new Connection(clusterApiUrl('devnet'))
const mx = Metaplex.make(connection)

export default function NFTList() {
	const [nfts, setNfts]: any = useState()
	const [mappedNFTs, setMappedNFTs] = useState([])

	function shortenAddress(address: string) {
		return `${address.substring(0, 4)}....${address.substring(address.length - 4)}`
	}

	useEffect(() => {
		const owner = new PublicKey('2R4bHmSBHkHAskerTHE6GE1Fxbn31kaD5gHqpsPySVd7')

		const fetchNfts = async () => {
			try {
				const allNFTs = await mx.nfts().findAllByOwner({ owner })
				const randomNumber = Math.floor(Math.random() * 15) + 1
				const totalNftsToCall = 4

				const limitedNfts = allNFTs
					.filter(nft => nft.uri.includes('arweave'))
					.slice(randomNumber, randomNumber + totalNftsToCall)

				const fetchedNfts = await Promise.all(
					limitedNfts.map(async nft => {
						try {
							const response = await fetch(nft.uri)
							if (!response.ok) {
								throw new Error('Failed to fetch NFT')
							}

							const NFTData = await response.json()
							return NFTData
						} catch (error) {
							console.error('Error fetching NFT:', error)
							return null
						}
					})
				)

				setNfts(fetchedNfts.filter(nft => nft !== null))
			} catch (error) {
				console.error('Error fetching NFTs:', error)
			}
		}

		fetchNfts()
	}, [])

	useEffect(() => {
		// Map the NFT data to the desired format
		const mappedNFTs = nfts?.map((nft, index) => {
			const nftId = `iu${index + 1}`
			const nftTitle = nft.name
			const nftImage = nft.image
			const ownerAddress = nft.properties?.creators[0]?.address

			// Create nftInfo array
			const nftInfo = [
				{
					title: 'Owner',
					value: ownerAddress ? shortenAddress(ownerAddress) : '',
				},
				{
					title: 'Mint Address',
					value: nft.symbol || '',
				},
				{
					title: 'Token Address',
					value: '72UGr...YdD',
				},
			]

			return {
				nftId,
				nftTitle,
				nftImage,
				nftInfo,
			}
		})

		setMappedNFTs(mappedNFTs)
	}, [nfts])

	return (
		<div className="pt-[74px] pb-14 px-2 w-full sm:px-[50px]">
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
				{(mappedNFTs && mappedNFTs.length) > 0 ? (
					mappedNFTs?.map((nft: NFTType) => {
						return (
							<SwiperSlide key={nft.nftId} className="flex items-center">
								<NFT data={nft} />
							</SwiperSlide>
						)
					})
				) : (
					<>
						{[1, 2, 3].map(card => {
							return (
								<SwiperSlide key={card} className="flex items-center">
									<div className="min-w-[470px]">
										<div className="mx-auto w-[388px] h-[590px] rounded-[1.25rem] animate-pulse bg-background"></div>
									</div>
								</SwiperSlide>
							)
						})}
					</>
				)}

				{mappedNFTs && (
					<div className="bg-background p-[11px] rounded-full w-[295px] m-auto h-[78px] mt-[28px]"></div>
				)}
			</Swiper>
		</div>
	)
}
