import {
	FormControl,
	FormLabel,
	Input,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";
import { FrontAssociation } from "@/src/types/types";
import supportAssociation from "@/src/utils/supportAssociation";
import { useDappContext } from "@/src/contexts/dapp";

type StackTableProps = {
	values: FrontAssociation[];
	isSupport?: boolean;
	isWithdraw?: boolean;
};

const Content = ({ values, isSupport, isWithdraw }: StackTableProps) => {
	const { contract } = useDappContext();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [amount, setAmount] = useState(0);
	const [selectedAssociation, setSelectedAssociation] = useState<FrontAssociation | undefined>();

	const handleSupport = (association: FrontAssociation) => {
		setSelectedAssociation(association);
		onOpen();
	};

	return (
		<>
			<TableContainer width={700} mt={10}>
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th isNumeric></Th>
						</Tr>
					</Thead>
					<Tbody>
						{values.map((association, index) => (
							<Tr key={index}>
								<Td>
									<Text>{association.name}</Text>
									<Text>{association.address}</Text>
								</Td>
								<Td isNumeric>
									{isSupport ? (
										<Button
											variant="special"
											size="xl"
											buttonType="left-icon"
											onClick={() => handleSupport(association)}
										>
											Support
										</Button>
									) : isWithdraw ? (
										<Button variant="special" size="xl" buttonType="left-icon">
											Withdraw
										</Button>
									) : (
										<></>
									)}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				title="Support association"
				CTA={
					<Button
						variant="primary"
						size="lg"
						onClick={() => supportAssociation(selectedAssociation as FrontAssociation, amount, contract)}
						// isLoading={isLoading}
					>
						OK
					</Button>
				}
			>
				<FormControl>
					<FormLabel>Amount to delegate</FormLabel>
					<Input
						type="number"
						w="100%"
						p="10px"
						my="4px"
						placeholder="42"
						onChange={(e: any) => setAmount(e.target.value)}
					/>
				</FormControl>
			</Modal>
		</>
	);
};

const NoContent = () => (
	<Text mt={10} size="1xl">
		No associations
	</Text>
);

const StackTable = (props: StackTableProps) => (
	<>{props.values.length === 0 ? <NoContent /> : <Content {...props} />}</>
);

export default StackTable;
