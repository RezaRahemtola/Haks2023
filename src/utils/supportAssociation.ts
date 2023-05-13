import { FrontAssociation } from "@/src/types/types";
import { WalletContract } from "@taquito/taquito";

const supportAssociation = async (association: FrontAssociation, amount: number, contract: WalletContract) => {
	try {
		const op = await contract.methods.offerStake(association.address).send({ amount });
		await op.confirmation();
	} catch (error) {
		console.error(error);
	}
};

export default supportAssociation;
