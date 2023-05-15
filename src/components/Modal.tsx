import {
	Box,
	Modal as UIModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";

import colors from "@/src/theme/foundations/colors";
import { bgColorMode, textColorMode } from "@/src/config/colorMode";
import { ReactElement } from "react";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactElement;
	CTA?: ReactElement;
};

const Modal = ({ isOpen, onClose, title, children, CTA }: ModalProps) => {
	const textColor = useColorModeValue(textColorMode.light, textColorMode.dark);
	const bgColor = useColorModeValue(bgColorMode.light, bgColorMode.dark);

	return (
		<UIModal isOpen={isOpen} onClose={onClose} size="2xl">
			<ModalOverlay />
			<ModalContent borderRadius="16px" p="24px 32px" bg={bgColor}>
				<ModalCloseButton />
				<ModalHeader p="0px">
					<VStack w="100%" align="start">
						<Text size="2xl" color={textColor}>
							{title}
						</Text>
						<Box
							w="400px"
							h="3px"
							borderRadius="2px"
							bgGradient={`linear-gradient(90deg, ${colors.blue[900]} 0%, ${colors.red[900]} 100%)`}
						/>
					</VStack>
				</ModalHeader>
				<ModalBody my="32px" p="0px">
					{children}
				</ModalBody>
				<ModalFooter p="0px">
					<VStack w="100%" align="start">
						{CTA}
					</VStack>
				</ModalFooter>
			</ModalContent>
		</UIModal>
	);
};

export default Modal;
