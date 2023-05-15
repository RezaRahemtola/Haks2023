import { Text } from "@chakra-ui/react";
import { useDappContext } from "@/src/contexts/dapp";
import StackTable from "@/src/components/donor/StackTable";
import getAssociations from "@/src/utils/getAssociations";
import { useEffect, useState } from "react";
import { FrontAssociation } from "@/src/types/types";
import Loader from "@/src/components/Loader";

const ListAssociation = () => {
	const { storage, Tezos } = useDappContext();
	const [values, setValues] = useState<FrontAssociation[] | undefined>();

	useEffect(() => {
		(async () => {
			setValues(await getAssociations(storage, Tezos));
		})();
	}, [storage, Tezos]);

	return (
		<>
			<Text size="2xl" variant="gradient">
				Associations:
			</Text>
			{values === undefined ? <Loader /> : <StackTable values={values} isSupport />}
		</>
	);
};
export default ListAssociation;
