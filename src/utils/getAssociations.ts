import { AssociationStorage, FrontAssociation, StorageData } from "@/src/types/types";
import { TezosToolkit } from "@taquito/taquito";

const getAssociations = async (storage: StorageData, Tezos: TezosToolkit) => {
	const associations: FrontAssociation[] = [];
	const addresses: { address: string; contract: string }[] = [];

	storage.associations.forEach((associationContract, key) => {
		addresses.push({ address: key, contract: associationContract });
	});
	await Promise.all(
		addresses.map(async (association) => {
			const contract = await Tezos.wallet.at(association.contract);
			const associationStorage: AssociationStorage = await contract.storage();
			associations.push({
				address: association.address,
				name: associationStorage.name,
				contract: association.contract,
			});
		})
	);

	return associations;
};

export default getAssociations;
