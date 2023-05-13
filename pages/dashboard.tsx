import DashboardAssociation from "@/src/components/dashAsso/Dash";
import DashboardDonnor from "@/src/components/dashDonnor/Dash";
import Loader from "@/src/components/Loader";
import { useDappContext } from "@/src/contexts/dapp";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
	const { address, connected, contractStorage } = useDappContext();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			if (!connected) {
				router.push("/");
			}
		})();
	}, []);

	if (contractStorage === undefined) {
		return <Loader />;
	}
	return <>{contractStorage.associations.has(address) ? <DashboardAssociation /> : <DashboardDonnor />}</>;
};
export default Dashboard;
