import ListAssociation from "@/src/components/dashDonnor/ListAsso";
import ListStack from "@/src/components/dashDonnor/ListStack";
import Footer from "@/src/components/landingPage/Footer";
import NavBar from "@/src/components/NavBar";
import colors from "@/src/theme/foundations/colors";
import { Box, VStack } from "@chakra-ui/react";

const DashboardDonnor = () => (
	<VStack w="100%" spacing={{ base: "128px", lg: "25px" }} pt="64px" overflowY="hidden">
		<NavBar />
		<ListStack />
		<Box
			w={800}
			h="5px"
			bg={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
			borderRadius="16px"
		/>
		<ListAssociation />
		<Box h={50} />
		<Footer />
	</VStack>
);

export default DashboardDonnor;
