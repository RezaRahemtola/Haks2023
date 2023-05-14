
const getTezoseValue = async () => {
	try {
		const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd');
		const tezosValue = await res.json()
		return tezosValue.tezos.usd;
	} catch (error) {
		console.error(error);
	}
};

const convertTezosToUsd = async (input: number) => {
	try {
		const tezosValue = await getTezoseValue();
		return tezosValue * input;
	} catch (error) {
		console.error(error);
	}
};

export default convertTezosToUsd;
