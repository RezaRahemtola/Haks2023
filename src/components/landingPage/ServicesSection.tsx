import { Box, Img, Stack, Text, useBreakpointValue, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";

import { textColorMode } from "@/src/config/colorMode";
import colors from "@/src/theme/foundations/colors";
import { IoWalletOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Button from "../Button";

const ServicesCard = ({
	title,
	description,
	icon,
	id,
	position,
}: {
	title: string;
	description: string;
	icon: string;
	id: string;
	position: "left" | "right";
}) => (
	<VStack
		bgGradient={`linear-gradient(135deg, ${position === "left" ? colors.blue[900] : colors.red[900]} 0%, ${
			position === "left" ? colors.red[900] : colors.blue[900]
		} 100%)`}
		p="5px"
		borderRadius="16px"
		filter={`drop-shadow(4px 4px 4px ${position === "left" ? "#FF003625" : "#0027FF25"})`}
		w={{ base: "250px", sm: "425px" }}
		textAlign="center"
		id={id}
	>
		<VStack bg="blue.50" borderRadius="12px" p={{ base: "32px 24px", sm: "64px 24px" }} spacing="48px">
			<VStack spacing="24px">
				<Img src={icon} />
				<Text variant={`${position === "left" ? "gradient" : "reverseGradient"}`} size="2xl" id={`${id}-title`}>
					{title}
				</Text>
			</VStack>
			<Text size="xl" id={`${id}-description`}>
				{description}
			</Text>
		</VStack>
	</VStack>
);

const ServicesSection = (): JSX.Element => {
	const isMobile: boolean = useBreakpointValue({ base: true, "2xl": false }) || false;

	const textColor = useColorModeValue(textColorMode.light, textColorMode.dark);
	const { colorMode } = useColorMode();
	const router = useRouter();

	
	return (
		<VStack
			spacing="72px"
			bg={colorMode === "light" ? "blue.50" : "gray.750"}
			w="100%"
			py={{ base: "128px", "2xl": "222px" }}
			pl={{ base: "0px", "2xl": "400px", "4xl": "0px" }}
			position="relative"
			boxShadow={`0px 0px 128px ${colorMode === "light" ? colors.blue[100] : colors.gray[700]}`}
		>
			<Text
				size="4xl"
				zIndex={10}
				textAlign="center"
				w={{ base: "300px", md: "500px", lg: "100%" }}
				id="ipc-landing-services-title"
				color={textColor}
			>
				Our project is {" "}
				<Box
					as="span"
					bgGradient={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
					bgClip="text"
				>
					Winner - Winner
				</Box>
			</Text>
			<Stack direction={{ base: "column", lg: "row" }} spacing="48px" zIndex={10}>
				<VStack>
					<ServicesCard
						title="Donors"
						description="Donors don't lose purchasing power when donating to charities"
						icon="/assets/icons/people.svg"
						position="left"
						id="ipc-landing-services-cloud-storage"
					/>
					<Button
						variant="special"
						size={isMobile ? "xl" : "2xl"}
						buttonType="left-icon"
						icon={IoWalletOutline}
						onClick={() => {
							router.push("/registe/donor");
						}}
					>
						Start as donor
					</Button>
				</VStack>
				<VStack>
					<ServicesCard
						title="Charities"
						description="Charities become more attractive to donors"
						icon="/assets/icons/solidarity.svg"
						position="right"
						id="ipc-landing-services-cloud-computing"
					/>
					<Button
						variant="special"
						size={isMobile ? "xl" : "2xl"}
						buttonType="left-icon"
						icon={IoWalletOutline}
						onClick={() => {
							router.push("/registe/charitie");
						}}
					>
						Start as charitie
					</Button>
				</VStack>
			</Stack>
			{!isMobile && (
				<Box as="div" position="absolute" top="0px" left="-200px" w="1000px">
					<Img src="/assets/meshes/gradient-mesh-1.svg" transform="rotate(-153deg)" w="700px" h="auto" />
				</Box>
			)}
		</VStack>
	);
};

export default ServicesSection;