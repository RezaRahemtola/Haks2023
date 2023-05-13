import { MichelsonMap } from "@taquito/taquito";

export type Association = {
	claimable: number;
	name: string;
	stackedAmount: number;
};

export type FrontAssociation = {
	name: string;
	address: string;
};

type Donator = MichelsonMap<string, number>;

export type StorageData = {
	associations: MichelsonMap<string, Association>;
	donators: MichelsonMap<string, Donator>;
	totalStaked: number;
};
