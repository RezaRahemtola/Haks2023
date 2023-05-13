import { VStack } from "@chakra-ui/react";

import Footer from "@/src/components/landingPage/Footer";
import HeadingSection from "@/src/components/landingPage/HeadingSection";
import NavBar from "@/src/components/landingPage/NavBar";
import PartnersSection from "@/src/components/landingPage/PartnersSection";
import ServicesSection from "@/src/components/landingPage/ServicesSection";

const Home = () => (
	<VStack w="100%" spacing={{ base: "128px", lg: "256px" }} pt="64px" overflowY="hidden">
		<NavBar />
		<HeadingSection />
		<VStack w="100%" spacing={{ base: "96px", lg: "128px" }}>
			<PartnersSection />
			<ServicesSection />
		</VStack>
		<Footer />
	</VStack>
);

export default Home;
