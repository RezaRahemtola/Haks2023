import React, { Dispatch, SetStateAction, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent, defaultEventCallbacks, NetworkType } from "@airgap/beacon-dapp";
import { FaWallet } from "react-icons/fa";
import Button from "@/src/components/Button";
import { useDappContext } from "@/src/contexts/dapp";

type ButtonProps = {
	Tezos: TezosToolkit;
	setTezos: Dispatch<SetStateAction<TezosToolkit>>;
	setWallet: Dispatch<SetStateAction<any>>;
	setConnected: Dispatch<SetStateAction<boolean>>;
	wallet: BeaconWallet;
	setUserAddress: Dispatch<SetStateAction<string>>;
};

const ConnectButton = ({ Tezos, setWallet, setConnected, wallet, setUserAddress, setTezos }: ButtonProps) => {
	const { connected, address } = useDappContext();

	const setup = async (userAddress: string): Promise<void> => {
		setUserAddress(userAddress);
	};
	const connectWallet = async (): Promise<void> => {
		try {
			await wallet?.requestPermissions({
				network: {
					type: NetworkType.GHOSTNET,
					rpcUrl: "https://ghostnet.ecadinfra.com",
				},
			});
			// gets user's address
			const userAddress = await wallet.getPKH();
			await setup(userAddress);
			setConnected(true);
		} catch (error) {
			console.error(error);
		}
	};

	const disconnectWallet = async (): Promise<void> => {
		if (wallet) {
			await wallet.clearActiveAccount();
		}
		setUserAddress("");
		setTezos(new TezosToolkit("https://ghostnet.ecadinfra.com"));
		setConnected(false);
	};

	useEffect(() => {
		(async () => {
			// creates a wallet instance
			const w = new BeaconWallet({
				name: "Haks 2023",
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
				setUserAddress(await w?.getPKH());
				setConnected(true);
			}
		})();
	}, []);

	if (connected) {
		return (
			<>
				<Button variant="secondary" buttonType="left-icon" icon={FaWallet} isTruncated>
					{address.slice(0, 5)}..{address.substring(address.length - 3)}
				</Button>
				<Button variant="secondary" buttonType="left-icon" icon={FaWallet} isTruncated onClick={disconnectWallet}>
					Disconnect
				</Button>
			</>
		);
	}
	return (
		<Button variant="secondary" buttonType="left-icon" icon={FaWallet} onClick={connectWallet}>
			Connect
		</Button>
	);
};

export default ConnectButton;
