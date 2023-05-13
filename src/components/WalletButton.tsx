import Button from "@/src/components/Button";
import { useDappContext } from "@/src/contexts/dapp";
import { NetworkType } from "@airgap/beacon-dapp";
import {
	Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger
} from '@chakra-ui/react';
import { BeaconWallet } from "@taquito/beacon-wallet";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { FaWallet } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

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
			<>Connect
				<Popover>
					<PopoverTrigger>
						<Button variant="secondary" buttonType="left-icon" icon={FaWallet} isTruncated>
						{address.slice(0, 5)}..{address.substring(address.length - 3)}
					</Button>
					</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverBody>
							<Button variant="secondary" buttonType="left-icon" icon={IoMdLogOut} isTruncated onClick={disconnectWallet}>
								Disconnect
							</Button>
							</PopoverBody>
						</PopoverContent>
				</Popover>
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
