import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { TezosToolkit, WalletContract } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { StorageData } from "@/src/types/types";

type DappContextProps = {
	Tezos: TezosToolkit;
	address: string;
	connected: boolean;
	setAddress: Dispatch<SetStateAction<string>>;
	setConnected: Dispatch<SetStateAction<boolean>>;
	wallet: BeaconWallet;
	storage: StorageData;
	setStorage: Dispatch<SetStateAction<StorageData>>;
	contract: WalletContract;
};

type DappContextType = DappContextProps | undefined;

const DappContext = createContext<DappContextType>(undefined);

const useDappContext = (): DappContextProps => {
	const context = useContext(DappContext);
	if (!context) throw new Error("context used outside of provider.");
	return context;
};

export type { DappContextType };
export { useDappContext };
export default DappContext;
