import { StorageData } from "@/src/types/types";
import { TezosToolkit } from "@taquito/taquito";

const getBalanceAssociation = async (storage: StorageData, Tezos: TezosToolkit, address: string) => {
	try {
    const contractAddress = storage.associations.get(address);
    if (contractAddress === undefined) return undefined;
    const contract = await Tezos.wallet.at(contractAddress);
    const storageSubcontract: StorageData = await contract.storage();
    const balance = storageSubcontract.totalStaked / 1000000;
    return balance;
  } catch (error) {
    console.error("Error in getBalanceAssociation:", error);
    throw error;
  }
}

export default getBalanceAssociation;
