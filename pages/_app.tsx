import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BeaconEvent, defaultEventCallbacks, NetworkType } from "@airgap/beacon-dapp";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit, WalletContract } from "@taquito/taquito";

import CONTRACT_ADDRESS from "@/src/config/environment";
import { StorageData } from "@/src/types/types";
import Loader from "@/src/components/Loader";
import DappContext from "@/src/contexts/dapp";
import theme from "@/src/theme";
import "@/src/theme/index.css";

export default function App({ Component, pageProps }: AppProps) {
	const [wallet, setWallet] = useState<BeaconWallet>();
	const [Tezos] = useState(new TezosToolkit("https://ghostnet.ecadinfra.com"));
	const [connected, setConnected] = useState(false);
	const [address, setAddress] = useState("");
	const [storage, setStorage] = useState<StorageData | undefined>(undefined);
	const [contract, setContract] = useState<WalletContract | undefined>(undefined);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const w = new BeaconWallet({
				name: "Stake & Share",
				preferredNetwork: NetworkType.GHOSTNET,
				disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
				eventHandlers: {
					// To keep the pairing alert, we have to add the following default event handlers back
					[BeaconEvent.PAIR_INIT]: {
						handler: defaultEventCallbacks.PAIR_INIT,
					},
				},
			});

			Tezos.setWalletProvider(w);
			setWallet(w);
			// checks if wallet was connected before
			const activeAccount = await w.client.getActiveAccount();
			if (activeAccount) {
				setAddress(await w.getPKH());
				setConnected(true);
			}
			setLoading(false);

			// creates a wallet instance
			const c = await Tezos.wallet.at(CONTRACT_ADDRESS);
			const s: StorageData = await c.storage();
			setStorage(s);
			setContract(c);
		})();
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<Head>
				<title>Stake & Share</title>
				<meta name="description" content="Finance charities while maintaining purchasing power." />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ChakraProvider theme={theme} resetCSS>
				<DappContext.Provider
					value={{
						wallet: wallet as BeaconWallet,
						Tezos,
						connected,
						setConnected,
						address,
						setAddress,
						storage: storage as StorageData,
						setStorage: setStorage as Dispatch<SetStateAction<StorageData>>,
						contract: contract as WalletContract,
					}}
				>
					<Component {...pageProps} />
				</DappContext.Provider>
			</ChakraProvider>
		</>
	);
}
