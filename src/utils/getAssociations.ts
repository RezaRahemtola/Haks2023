import { FrontAssociation, StorageData } from "@/src/types/types";

const getAssociations = (storage: StorageData) => {
	const associations: FrontAssociation[] = [];

	storage.associations.forEach((association, key) => {
		associations.push({ address: key, name: association.name });
	});
	return associations;
};

export default getAssociations;
