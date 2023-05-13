import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";
import { textColorMode } from "@/src/config/colorMode";
import { useDappContext } from "@/src/contexts/dapp";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Text,
	useBreakpointValue,
	useColorModeValue,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const ConnectionCharity = (): JSX.Element => {
	const isMobile: boolean = useBreakpointValue({ base: true, lg: false }) || false;
	const textColor = useColorModeValue(textColorMode.light, textColorMode.dark);
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLoading] = useState(false);
	const charityName = "";
	const [name, setName] = useState("");
	const { contract } = useDappContext();

	const onRegister = async () => {
		try {
			const result = await contract.methods.registerAssociation(name).send();
			const confirmation = await result.confirmation(1);
		} catch (e) {
			console.error("Error: ", e);
		}
	};

	return (
		<VStack spacing={{ base: "24px", md: "50px" }}>
			<VStack h={"5rem"}>
				<Text
					style={{ cursor: "pointer" }}
					size="2xl"
					variant="gradient"
					id="haks2023-landing-navigation-name"
					onClick={() => {
						router.push("/");
					}}
				>
					HAKS 2023
				</Text>
			</VStack>
			<VStack w={{ base: "300px", md: "650px", lg: "750px", "2xl": "1000px" }}>
				<Text size="7xl" variant="gradient" textAlign="center" id="ipc-landing-navigation-name">
					Start as a charity
				</Text>
			</VStack>
			<Text size="2xl" maxW="800px" color={textColor} align={"center"}>
				Join the movement for a brighter future. <br />
				Register your association
				<Box as="span" fontWeight="700">
					{" "}
					power of blockchain
				</Box>{" "}
				to support your cause.
			</Text>
			<VStack spacing={"1rem"}></VStack>
			<VStack spacing={{ base: "24px", md: "50px" }}>
				<Button width="500px" variant="special" size={isMobile ? "xl" : "2xl"} buttonType="left-icon" onClick={onOpen}>
					Enter your name
				</Button>
			</VStack>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				title="Enter the charity name"
				CTA={
					<Button
						variant="primary"
						size="lg"
						isLoading={isLoading}
						id="Haks2023-dashboard-update-programName-button"
						onClick={onRegister}
					>
						OK
					</Button>
				}
			>
				<FormControl>
					<FormLabel color={textColor}>Charity name</FormLabel>
					<Input
						type="text"
						w="100%"
						p="10px"
						my="4px"
						placeholder={charityName}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
						id="hakers2023-dashboard-input-update-programame"
					/>
				</FormControl>
			</Modal>
		</VStack>
	);
};

export default ConnectionCharity;
