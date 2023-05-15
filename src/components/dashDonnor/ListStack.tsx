import { Text } from "@chakra-ui/react";
import { useDappContext } from "@/src/contexts/dapp";
import getDonatorSupportedAssociations from "@/src/utils/getDonatorSupportedAssociations";
import { useEffect, useState } from "react";
import Loader from "@/src/components/Loader";
import StackTable from "@/src/components/dashDonnor/StackTable";
import { FrontAssociation } from "@/src/types/types";

const ListStack = () => {
	const { storage, address, Tezos } = useDappContext();
	const [values, setValues] = useState<FrontAssociation[] | undefined>();

	useEffect(() => {
		(async () => {
			setValues(await getDonatorSupportedAssociations(storage, address, Tezos));
		})();
	}, [storage, address, Tezos]);

	return (
		<>
			<Text mt={10} size="2xl" variant="gradient">
				Delegation in progress:
			</Text>
			{values === undefined ? <Loader /> : <StackTable values={values} isWithdraw />}
		</>
	);
};
export default ListStack;
