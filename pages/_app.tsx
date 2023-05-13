import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

import Loader from "@/src/components/Loader";
import DappContext from "@/src/contexts/dapp";
import theme from "@/src/theme";
import "@/src/theme/index.css";
import { BeaconEvent, defaultEventCallbacks, NetworkType } from "@airgap/beacon-dapp";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

export default function App({ Component, pageProps }: AppProps) {
	const [wallet, setWallet] = useState<BeaconWallet>(
		new BeaconWallet({
			name: "Haks 2023",
			preferredNetwork: NetworkType.GHOSTNET,
			disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
			eventHandlers: {
				// To keep the pairing alert, we have to add the following default event handlers back
				[BeaconEvent.PAIR_INIT]: {
					handler: defaultEventCallbacks.PAIR_INIT,
				},
			},
		})
	);
	const [Tezos] = useState(new TezosToolkit("https://ghostnet.ecadinfra.com"));
	const [connected, setConnected] = useState(false);
	const [address, setAddress] = useState("");

	const [connecting, setConnecting] = useState(true);

	useEffect(() => {
		(async () => {
			Tezos.setWalletProvider(wallet);
			// checks if wallet was connected before
			const activeAccount = await wallet.client.getActiveAccount();
			if (activeAccount) {
				setAddress(await wallet.getPKH());
				setConnected(true);
			}
			setConnecting(false);
		})();
	}, []);

	if (connecting) {
		return <Loader />
	}

	return (
		<>
			<Head>
				<title>Haks 2023</title>
				<meta
					name="description"
					content="A distributed cloud built on top of Aleph, the next generation network of distributed big data applications."
				/>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ChakraProvider theme={theme} resetCSS>
				<DappContext.Provider value={{ wallet, setWallet, Tezos, connected, setConnected, address, setAddress }}>
					<Component {...pageProps} />
				</DappContext.Provider>
			</ChakraProvider>
		</>
	);
}
