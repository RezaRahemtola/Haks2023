import { Text, Box, useBreakpointValue, VStack, useColorModeValue } from "@chakra-ui/react";

import colors from "@/src/theme/foundations/colors";

import { textColorMode } from "@/src/config/colorMode";

import { IoWalletOutline } from "react-icons/io5";

import Button from "@/src/components/Button";

const ConnectionDonor = (): JSX.Element => {
	const isMobile: boolean = useBreakpointValue({ base: true, lg: false }) || false;
	const textColor = useColorModeValue(textColorMode.light, textColorMode.dark);

    const styles = {
        borderRadius: '10px',
        backgroundColor: `linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 50%, ${colors.blue[900]} 100%)`
    };

    return (
        <VStack spacing={{ base: "24px", md: "50px" }}>
			<VStack w={{ base: "300px", md: "650px", lg: "750px", "2xl": "1000px" }}>
				<Text size="7xl" variant="gradient" textAlign="center" id="ipc-landing-navigation-name">
					Start as donor
				</Text>
			</VStack>
            <Box
				w={{ base: "250px", sm: "400px", lg: "600px", xl: "750px", "3xl": "1000px" }}
				h="5px"
				bg={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
				borderRadius="16px"
			/>
            <VStack style={styles}>
                <Text size="3xl" maxW="800px" color={textColor} align={"center"}>
                    Join the movement {" "}
                    <br />
                    The first step towards 
			    	<Box as="span" fontWeight="700">
                        {" "}  stake your XTZ
			    	</Box>{" "}
                    for a brighter future and support the causes you care about.
			    </Text>
                <Button
			    	variant="special"
			    	size={isMobile ? "xl" : "2xl"}
			    	buttonType="left-icon"
			    	icon={IoWalletOutline}
			        >
			    	Connect to your wallet
			    </Button>
            </VStack>
        </VStack>
    );
};

export default ConnectionDonor;
