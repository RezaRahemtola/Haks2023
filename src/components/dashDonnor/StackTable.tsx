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
import { useDappContext } from "@/src/contexts/dapp";
import { FrontAssociation } from "@/src/types/types";
import supportAssociation from "@/src/utils/supportAssociation";
import { useRouter } from "next/router";
import withdrawStake from "@/src/utils/withdrawStake";

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
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitSupport = async () => {
		setIsLoading(true);
		await supportAssociation(association, amount, Tezos);
		setIsLoading(false);
		onClose();
		toast({ title: `Successfully delegating ${amount} XTZ to ${association?.name}`, status: "success" });
		router.reload();
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
					<Button isLoading={isLoading} variant="primary" size="lg" onClick={handleSubmitSupport}>
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
	const router = useRouter();

	const handleWithdraw = async () => {
		await withdrawStake(association.contract, Tezos);
		// toast({ title: `Withdraw success from ${association.name}`, status: "success" });
		router.reload();
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
