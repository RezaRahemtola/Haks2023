import { StorageData } from "@/src/types/types";

const getBalanceAssociation = (storage: StorageData) => {
	const balance = storage.totalStaked / 1000000;
	return balance.toString();
}

export default getBalanceAssociation;
