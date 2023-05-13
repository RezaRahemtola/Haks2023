import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { IoRocketSharp } from "react-icons/io5";

import Button from "@/src/components/Button";
import WalletButton from "@/src/components/WalletButton";
import { useDappContext } from "@/src/contexts/dapp";

const NavBar = () => {
	const router = useRouter();
	const { wallet, setWallet, setConnected, setAddress, Tezos, setTezos } = useDappContext();

	return (
		<>
			<HStack justify="space-between" w={{ base: "300px", lg: "750px", "2xl": "1000px" }}>
				<Text size="2xl" variant="gradient" id="ipc-landing-navigation-name">
					HAKS 2023
				</Text>

				<Button
					variant="special"
					size="xl"
					buttonType="left-icon"
					icon={IoRocketSharp}
					onClick={() => {
						router.push("/dashboard");
					}}
					id="ipc-landing-navbar-start-button"
				>
					Start
				</Button>
				<WalletButton
					wallet={wallet}
					setWallet={setWallet}
					setConnected={setConnected}
					Tezos={Tezos}
					setTezos={setTezos}
					setUserAddress={setAddress}
				/>
			</HStack>
		</>
	);
};

export default NavBar;
