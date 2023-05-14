import { AssociationStorage, FrontAssociation, StorageData } from "@/src/types/types";
import { TezosToolkit } from "@taquito/taquito";

const getDonatorSupportedAssociations = async (
	storage: StorageData,
	address: string,
	Tezos: TezosToolkit
): Promise<FrontAssociation[]> => {
	const associations: FrontAssociation[] = [];
	const addresses: { address: string; contract: string }[] = [];

	storage.associations.forEach((associationContract, key) => {
		addresses.push({ address: key, contract: associationContract });
	});
	await Promise.all(
		addresses.map(async (association) => {
			const contract = await Tezos.wallet.at(association.contract);
			const associationStorage: AssociationStorage = await contract.storage();
			const stackedAmount = await associationStorage.donators.get(address);

			if (stackedAmount === undefined) return;
			associations.push({
				address: association.address,
				name: associationStorage.name,
				contract: association.contract,
				stackedAmount: stackedAmount / 1000000,
			});
		})
	);

	return associations;
};

export default getDonatorSupportedAssociations;
