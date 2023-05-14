import { HStack, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

import { IoRocketSharp } from "react-icons/io5";

import Button from "@/src/components/Button";
import WalletButton from "@/src/components/WalletButton";
import { useDappContext } from "@/src/contexts/dapp";

const NavBar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { wallet, setConnected, setAddress, connected } = useDappContext();

	return (
		<>
			<HStack justify="space-between" w={{ base: "300px", lg: "750px", "2xl": "1000px" }}>
				<Text
					style={{ cursor: "pointer" }}
					onClick={() => {
						router.push("/");
					}}
					size="2xl"
					variant="gradient"
				>
					HAKS 2023
				</Text>

				{pathname === "/" && connected ? (
					<Button
						variant="special"
						size="xl"
						buttonType="left-icon"
						icon={IoRocketSharp}
						onClick={() => {
							router.push("/dashboard");
						}}
					>
						Start
					</Button>
				) : (
					<></>
				)}

				<WalletButton wallet={wallet} setConnected={setConnected} setUserAddress={setAddress} />
			</HStack>
		</>
	);
};

export default NavBar;
