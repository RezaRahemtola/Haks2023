import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { useAccountPkh, useConnect, useReady, useWallet } from "@/src/lib/dappstate";
import { NETWORK } from "@/src/lib/settings";
import Button from "./Button";

const WalletButton = () => {
	const ready = useReady();
	const wallet = useWallet();
	const acc = useAccountPkh();
	const connect = useConnect();
	const handleConnect = React.useCallback(async () => {
		try {
			await connect(NETWORK);
		} catch (err: any) {
			alert(err.message);
		}
	}, [connect]);

	if (ready) {
		return <p>{acc}</p>;
	}
	return wallet ? (
		<Button variant="special" buttonType="left-icon" icon={IoRocketSharp} onClick={handleConnect}>
			Connect to wallet
		</Button>
	) : (
		<a href="https://templewallet.com/" rel="noopener">
			<Button>Install Temple</Button>
		</a>
	);
};

export default WalletButton;
