import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

import DappContext from "@/src/contexts/dapp";
import theme from "@/src/theme";
import "@/src/theme/index.css";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

export default function App({ Component, pageProps }: AppProps) {
	const [wallet, setWallet] = useState<BeaconWallet | null>(null);
	const [Tezos, setTezos] = useState(new TezosToolkit("https://ghostnet.ecadinfra.com"));
	const [connected, setConnected] = useState(false);
	const [address, setAddress] = useState("");

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
				<DappContext.Provider
					value={{ wallet, setWallet, Tezos, setTezos, connected, setConnected, address, setAddress }}
				>
					<Component {...pageProps} />
				</DappContext.Provider>
			</ChakraProvider>
		</>
	);
}
