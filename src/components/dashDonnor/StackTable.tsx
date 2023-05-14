import {
	FormControl,
	FormLabel,
	Input,
	Link,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";
import { FrontAssociation } from "@/src/types/types";
import supportAssociation from "@/src/utils/supportAssociation";
import { useDappContext } from "@/src/contexts/dapp";
import withdrawStake from "@/src/utils/withdrawStake";
import getDonatorSupportedAssociations from "@/src/utils/getDonatorSupportedAssociations";

type StackTableProps = {
	values: FrontAssociation[];
	isSupport?: boolean;
	isWithdraw?: boolean;
};

const HandleSupport = ({ association }: { association: FrontAssociation }) => {
	const toast = useToast({ duration: 2000, isClosable: true });
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { storage, address, Tezos } = useDappContext();
	const [amount, setAmount] = useState(0);

	const handleSubmitSupport = async () => {
		await supportAssociation(association, amount, Tezos);
		onClose();
		toast({ title: `Successfully delegating ${amount} XTZ to ${association?.name}`, status: "success" });
		await getDonatorSupportedAssociations(storage, address, Tezos);
	};

	return (
		<>
			<Button variant="special" size="xl" buttonType="left-icon" onClick={onOpen}>
				Support
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				title="Support charity"
				CTA={
					<Button variant="primary" size="lg" onClick={handleSubmitSupport}>
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

const HandleWithdraw = ({ association }: { association: FrontAssociation }) => {
	const toast = useToast({ duration: 2000, isClosable: true });
	const { Tezos } = useDappContext();

	const handleWithdraw = async () => {
		await withdrawStake(association.contract, Tezos);
		toast({ title: `Withdraw success from ${association.name}`, status: "success" });
	};

	return (
		<Button variant="special" size="xl" buttonType="left-icon" onClick={handleWithdraw}>
			Withdraw
		</Button>
	);
};

const Content = ({ values, isSupport, isWithdraw }: StackTableProps) => (
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
								<Text size="xl">{association.name}</Text>
								<Link href={`https://tzprofiles.com/view/ghostnet/${association.address}`} isExternal>
									{association.address}
								</Link>
								{association.stackedAmount !== undefined ? (
									<Text size="l">{association.stackedAmount} XTZ stacked</Text>
								) : (
									<></>
								)}
							</Td>
							<Td isNumeric>
								{isSupport ? (
									<HandleSupport association={association} />
								) : isWithdraw ? (
									<HandleWithdraw association={association} />
								) : (
									<></>
								)}
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	</>
);

const NoContent = () => (
	<Text mt={10} size="1xl">
		No associations
	</Text>
);

const StackTable = (props: StackTableProps) => (
	<>{props.values.length === 0 ? <NoContent /> : <Content {...props} />}</>
);

export default StackTable;
