import { Box, Img, Text, useBreakpointValue, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { IoRocketSharp } from "react-icons/io5";

import Button from "@/src/components/Button";
import { textColorMode } from "@/src/config/colorMode";
import colors from "@/src/theme/foundations/colors";

const HeadingSection = () => {
	const router = useRouter();
	const isMobile: boolean = useBreakpointValue({ base: true, lg: false }) || false;

	const textColor = useColorModeValue(textColorMode.light, textColorMode.dark);

	return (
		<VStack w="100%" spacing="64px" textAlign="center">
			<VStack spacing="32px" w={{ base: "300px", sm: "550px", md: "600px", lg: "1000px" }}>
				<Text size={isMobile ? "4xl" : "7xl"} id="ipc-landing-headline" color={textColor}>
				Finance charities while maintaining 					<Box
						as="span"
						backgroundImage={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
						bgClip="text"
					>
						purchasing power
					</Box>{" "}
					.
				</Text>
				<Text size="xl" maxW="512px" id="ipc-landing-subHeadline" color={textColor}>
				The platform connecting charities and donors to allow them to stack their XTZ for the benefit of{" "}
					<Box as="span" fontWeight="700">
					solidarity
					</Box>{" "}
					.
				</Text>
			</VStack>
			<Button
				variant="special"
				size={isMobile ? "xl" : "2xl"}
				buttonType="left-icon"
				icon={IoRocketSharp}
				onClick={() => {
					router.push("/connection");
				}}
				id="ipc-landing-heading-start-button"
			>
				Login
			</Button>
			{!isMobile && (
				<>
					<Box as="div" position="absolute" top="75px" left="0px" w="600px" zIndex={-10}>
						<Img
							src="/assets/meshes/blue-ellipse.svg"
							w="600px"
							h="auto"
							ml={{ base: "-500px", xl: "-450px", "2xl": "-400px" }}
							filter="blur(128px)"
						/>
					</Box>
					<Box as="div" w="1280px" h="900px" position="absolute" top="100px" right="0px" overflow="hidden" zIndex={-10}>
						<Img
							src="/assets/meshes/gradient-mesh-3.svg"
							transform="rotate(-38deg)"
							w="1280px"
							h="auto"
							ml={{ base: "900px", xl: "800px", "2xl": "725px" }}
						/>
					</Box>
				</>
			)}
		</VStack>
	);
};

export default HeadingSection;
