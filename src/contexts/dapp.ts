import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

type DappContextProps = {
	Tezos: TezosToolkit;
	address: string;
	connected: boolean;
	setAddress: Dispatch<SetStateAction<string>>;
	setConnected: Dispatch<SetStateAction<boolean>>;
	setTezos: Dispatch<SetStateAction<TezosToolkit>>;
	setWallet: Dispatch<SetStateAction<BeaconWallet | null>>;
	wallet: BeaconWallet | null;
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
