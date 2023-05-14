import { TezosToolkit } from "@taquito/taquito";

const widthdrawStake = async (associationContract: string, Tezos: TezosToolkit) => {
	try {
		const contract = await Tezos.wallet.at(associationContract);
		const op = await contract.methods.retractAll().send();
		await op.confirmation();
	} catch (error) {
		console.error(error);
	}
};
export default widthdrawStake;
