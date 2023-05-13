import ListAssociation from "@/src/components/dashDonnor/ListAsso";
import ListStack from "@/src/components/dashDonnor/ListStack";
import Footer from "@/src/components/landingPage/Footer";
import NavBar from "@/src/components/landingPage/NavBar";
import colors from "@/src/theme/foundations/colors";
import { Box, VStack } from "@chakra-ui/react";

const DashboardDonnor = () => (
	<VStack w="100%" spacing={{ base: "128px", lg: "256px" }} pt="64px" overflowY="hidden">
      <NavBar />
			<ListStack />
			<Box
				w={{ base: "250px", sm: "350px", xl: "1000px" }}
				h="5px"
				bg={`linear-gradient(135deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
				borderRadius="16px"
			/>
			<ListAssociation />
			<Footer />
	</VStack>
);

export default DashboardDonnor;
