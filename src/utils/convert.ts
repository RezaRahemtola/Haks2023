const getTezoseValue = async () => {
	try {
		const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd");
		const tezosValue = await res.json();
		return tezosValue.tezos.usd as number;
	} catch (error) {
		console.error(error);
	}
	return 0;
};

const convertTezosToUsd = async (input: number) => {
	try {
		const tezosValue = await getTezoseValue();
		return tezosValue * input;
	} catch (error) {
		console.error(error);
	}
	return 0;
};

export default convertTezosToUsd;
