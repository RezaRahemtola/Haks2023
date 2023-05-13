import { HStack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { IoRocketSharp } from "react-icons/io5";

import Button from "@/src/components/Button";

const NavBar = () => {
	const router = useRouter();
	const buttonDisplayable: boolean = useBreakpointValue({ base: false, lg: true }) || false;

	return (
		<>
			{buttonDisplayable ? (
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
								router.push("/connection");
							}}
							id="ipc-landing-navbar-start-button"
						>
							Start
						</Button>
				</HStack>
			) : (
				<VStack w={{ base: "300px", md: "650px", lg: "750px", "2xl": "1000px" }}>
					<Text size="4xl" variant="gradient" textAlign="center" id="ipc-landing-navigation-name">
						HAKS 2023
					</Text>
				</VStack>
			)}
		</>
	);
};

export default NavBar;
