import { FrontAssociation } from "@/src/types/types";
import { TezosToolkit } from "@taquito/taquito";

const supportAssociation = async (association: FrontAssociation, amount: number, Tezos: TezosToolkit) => {
	try {
		const contract = await Tezos.wallet.at(association.contract);
		const op = await contract.methods.offerStake(association.address).send({ amount });
		await op.confirmation();
	} catch (error) {
		console.error(error);
	}
};

export default supportAssociation;
