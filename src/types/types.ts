import { MichelsonMap } from "@taquito/taquito";

export type FrontAssociation = {
	name: string;
	address: string;
	contract: string;
	stackedAmount?: number;
};

export type StorageData = {
	associations: MichelsonMap<string, string>;
	totalStaked: number;
};

export type AssociationStorage = {
	donators: MichelsonMap<string, number>;
	name: string;
	totalStaked: number;
};
