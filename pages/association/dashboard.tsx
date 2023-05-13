import AmountWithdraw from "@/src/components/dashAsso/Amount";
import Footer from "@/src/components/landingPage/Footer";
import NavBar from "@/src/components/landingPage/NavBar";
import { Text, VStack } from "@chakra-ui/react";

const DashboardAssociation = () => (
	<VStack w="100%" spacing={{ base: "128px", lg: "256px" }} pt="64px" overflowY="hidden">
      <NavBar />
			<Text fontSize='3xl' fontWeight={"bold"}>Balance</Text>
			<AmountWithdraw />
			<Footer />
	</VStack>
);

export default DashboardAssociation;
