import DashboardAssociation from "@/src/components/dashAsso/Dash";
import DashboardDonnor from "@/src/components/dashDonnor/Dash";
import Loader from "@/src/components/Loader";
import { useDappContext } from "@/src/contexts/dapp";
import { StorageData } from "@/src/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dashboard = () => {
	const { Tezos, address, connected } = useDappContext();
	const [storage, setStorage] = useState<StorageData | undefined>(undefined);
	const router = useRouter();

	useEffect(() => {
		(async () => {
			if (!connected) {
				router.push("/");
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			// creates a wallet instance
			const contract = await Tezos.wallet.at("KT1MEqk1xYNUZVyKzNhTbNuAAgq9x2kg7q5B");
			const s: StorageData = await contract.storage();
			setStorage(s);
		})();
	}, [Tezos]);

	if (storage === undefined) {
		return <Loader />;
	}
	return (
		<>
			{storage.associations.has(address) ? <DashboardAssociation /> : <DashboardDonnor />}
		</>
	);
};
export default Dashboard;
