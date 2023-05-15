import AmountWithdraw from "@/src/components/association/Amount";
import Footer from "@/src/components/landingPage/Footer";
import NavBar from "@/src/components/NavBar";
import { Box, Text, VStack } from "@chakra-ui/react";

const DashboardAssociation = () => (
	<VStack w="100%" spacing={{ base: "128px", lg: "25px" }} pt="64px" overflowY="hidden">
		<NavBar />
		<Box h={50} />
		<Text fontSize="4xl" fontWeight={"bold"}>
			Balance
		</Text>
		<AmountWithdraw />
		<Box h={120} />
		<Footer />
	</VStack>
);

export default DashboardAssociation;
