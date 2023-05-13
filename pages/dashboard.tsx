import { useEffect, useState } from "react";
import { useDappContext } from "@/src/contexts/dapp";
import { useRouter } from "next/router";
import { StorageData } from "@/src/types/types";

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
		return <div>LOADING</div>;
	}
	return (
		<>
			<div>DASHBOARD</div>
			{storage.associations.has(address) ? <div>ASSO DASHBOARD</div> : <div>USER DASHBOARD</div>}
		</>
	);
};
export default Dashboard;
