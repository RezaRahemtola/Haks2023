import DashboardAssociation from "@/src/components/dashAsso/Dash";
import DashboardDonnor from "@/src/components/dashDonnor/Dash";
import Loader from "@/src/components/Loader";
import { useDappContext } from "@/src/contexts/dapp";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
