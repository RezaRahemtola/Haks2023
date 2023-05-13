import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "@/src/theme";
import "@/src/theme/index.css";
import Head from "next/head";
import { DAPP_NAME } from "@/src/lib/settings";
import { DAppProvider } from "@/src/lib/dappstate";

export default function App({ Component, pageProps }: AppProps) {
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
				<DAppProvider appName={DAPP_NAME}>
					<Component {...pageProps} />
				</DAppProvider>
			</ChakraProvider>
		</>
	);
}
