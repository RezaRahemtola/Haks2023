import { useRouter } from "next/router";
import { useEffect } from "react";

import DashboardAssociation from "@/src/components/association/Dashboard";
import DashboardDonnor from "@/src/components/donor/Dashboard";
import Loader from "@/src/components/Loader";
import { useDappContext } from "@/src/contexts/dapp";

const Dashboard = () => {
	const { address, connected, storage } = useDappContext();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			if (!connected) {
				await router.push("/");
			}
		})();
	}, [connected, router]);

	if (storage === undefined || !connected) {
		return <Loader />;
	}
	return <>{storage.associations.has(address) ? <DashboardAssociation /> : <DashboardDonnor />}</>;
};
export default Dashboard;
