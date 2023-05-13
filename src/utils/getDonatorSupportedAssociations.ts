import { FrontAssociation, StorageData } from "@/src/types/types";

const getDonatorSupportedAssociations = async (storage: StorageData, address: string): Promise<FrontAssociation[]> => {
	const associations: FrontAssociation[] = [];
	const user = await storage.donators.get(address);

	if (user === undefined) return [];
	user.forEach((value, key) => {
		const association = storage.associations.get(key);
		if (association === undefined) return;
		associations.push({ address: key, name: association.name });
	});
	return associations;
};

export default getDonatorSupportedAssociations;
