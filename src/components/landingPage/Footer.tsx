import { Box, HStack, Icon, Text, useBreakpointValue, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";

import colors from "@/src/theme/foundations/colors";
import { textColorMode } from "@/src/config/colorMode";
import { GithubLogo, PoCLogo } from "@/src/assets/icons/logos";

const Footer = () => {
	const isMobile: boolean = useBreakpointValue({ base: true, sm: false }) || false;
	const textColor = useColorModeValue(textColorMode.light, textColorMode.dark);
	const { colorMode } = useColorMode();

	return (
		<VStack
			bg={colorMode === "light" ? "blue.50" : "gray.750"}
			w="100%"
			py="64px"
			spacing={{ base: "48px", sm: "64px" }}
			boxShadow={`0px 0px 1280px ${colorMode === "light" ? colors.blue[100] : colors.gray[700]}`}
		>
			<Box
				w={{ base: "250px", sm: "400px", lg: "600px", xl: "750px" }}
				h="5px"
				bg={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
				borderRadius="16px"
			/>
			<Text size={isMobile ? "boldXl" : "3xl"} textAlign="center" color={textColor}>
				Everything is{" "}
				<Box
					as="span"
					bgGradient={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
					bgClip="text"
				>
					open source
				</Box>
				.
			</Text>
			{isMobile ? (
				<>
					<VStack spacing="4px">
						<Text size="boldLg" color={textColor}>
							Contribute with us on{" "}
						</Text>
						<HStack>
							<Icon as={GithubLogo} w="20px" h="auto" color={textColor} />
							<Text size="boldLg" variant="gradient">
								<a href="https://github.com/RezaRahemtola/Haks2023">@RezaRahemtola/Haks2023</a>
							</Text>
						</HStack>
					</VStack>
					<VStack spacing="4px">
						<Text size="boldXl" color={textColor}>
							Made by the
						</Text>
						<HStack>
							<Icon as={PoCLogo} h="16px" w="auto" color={textColor} />
							<Text size="boldXl" color={textColor}>
								team.
							</Text>
						</HStack>
					</VStack>
				</>
			) : (
				<>
					<HStack>
						<Text size="boldXl" color={textColor}>
							Contribute with us on{" "}
						</Text>
						<Icon as={GithubLogo} w="20px" h="auto" color={textColor} />
						<Text size="boldXl" variant="gradient">
							<a href="https://github.com/RezaRahemtola/Haks2023" target="_blank">
								@RezaRahemtola/Haks2023
							</a>
						</Text>
					</HStack>
					<HStack spacing="12px">
						<Text size="3xl" color={textColor}>
							Made by the
						</Text>
						<Icon as={PoCLogo} h="24px" w="auto" color={textColor} />
						<Text size="3xl" color={textColor}>
							team.
						</Text>
					</HStack>
				</>
			)}
		</VStack>
	);
};

export default Footer;
