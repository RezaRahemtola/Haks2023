import { Text } from "@chakra-ui/react";
import { useDappContext } from "@/src/contexts/dapp";
import StackTable from "@/src/components/dashDonnor/StackTable";
import getAssociations from "@/src/utils/getAssociations";

const ListAssociation = () => {
	const { storage } = useDappContext();
	const values = getAssociations(storage);

	return (
		<>
			<Text size="2xl" variant="gradient">
				Associations:
			</Text>
			<StackTable values={values} isSupport />
		</>
	);
};
export default ListAssociation;
