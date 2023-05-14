if (!process.env.NEXT_PUBLIC_CONTRACT_ADDRESS) throw new Error("NEXT_PUBLIC_CONTRACT_ADDRESS env variable must be set");

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
export default CONTRACT_ADDRESS;
