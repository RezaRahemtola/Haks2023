import { WalletContract } from "@taquito/taquito";

const claimGifts = async (contract: WalletContract) => {
	try {
		const op = await contract.methods.claimGifts().send();
		await op.confirmation();
	} catch (error) {
		console.error(error);
	}
};

export default claimGifts;
