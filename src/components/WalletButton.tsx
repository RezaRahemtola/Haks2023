import React, { Dispatch, SetStateAction } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { FaWallet } from "react-icons/fa";
import Button from "@/src/components/Button";
import { useDappContext } from "@/src/contexts/dapp";
import { NetworkType } from "@airgap/beacon-dapp";
import { useRouter } from "next/router";

type ButtonProps = {
	setConnected: Dispatch<SetStateAction<boolean>>;
	wallet: BeaconWallet;
	setUserAddress: Dispatch<SetStateAction<string>>;
};

const ConnectButton = ({ setConnected, wallet, setUserAddress }: ButtonProps) => {
	const { connected, address } = useDappContext();
	const router = useRouter();

	const setup = async (userAddress: string): Promise<void> => {
		setUserAddress(userAddress);
	};
	const connectWallet = async (): Promise<void> => {
		try {
			await wallet.requestPermissions({
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
		await router.push("/");
		if (wallet) {
			await wallet.clearActiveAccount();
		}
		setUserAddress("");
		setConnected(false);
	};

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
