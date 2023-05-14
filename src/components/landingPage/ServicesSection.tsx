import { Box, Img, Stack, Text, useBreakpointValue, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";

import { textColorMode } from "@/src/config/colorMode";
import colors from "@/src/theme/foundations/colors";
import { IoWalletOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Button from "../Button";
import ServicesCard from "../serviceCard";

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
			<Text size="4xl" zIndex={10} textAlign="center" w={{ base: "300px", md: "500px", lg: "100%" }} color={textColor}>
				Our project is{" "}
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
					/>
					<Button
						variant="special"
						size={isMobile ? "xl" : "2xl"}
						buttonType="left-icon"
						icon={IoWalletOutline}
						onClick={() => {
							router.push("/register/donor");
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
					/>
					<Button
						variant="special"
						size={isMobile ? "xl" : "2xl"}
						buttonType="left-icon"
						icon={IoWalletOutline}
						onClick={() => {
							router.push("/register/charity");
						}}
					>
						Start as charity
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
