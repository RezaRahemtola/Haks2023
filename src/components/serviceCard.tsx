import { Img, Text, VStack } from "@chakra-ui/react";

import colors from "@/src/theme/foundations/colors";

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

export default ServicesCard;