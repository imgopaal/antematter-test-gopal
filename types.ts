type NFTInfoType = {
	title: string
	value: string
}
type NFTType = {
	nftId: string
	nftTitle: string
	nftImage: string
	nftInfo: NFTInfoType[]
}
export type { NFTType, NFTInfoType }
