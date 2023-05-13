import { FrontAssociation } from "@/src/types/types";

const supportAssociation = async (association: FrontAssociation, amount: number, contract: any) => {
	contract.methods
		.offerStake()
		.send({ amount })
		.then(() => console.log("ca marche wesh"))
		.catch((err) => console.log(err));
};

export default supportAssociation;
