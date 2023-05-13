import { MichelsonMap } from "@taquito/taquito";
import BigNumber from "bignumber.js";

export type FrontAssociation = {
	name: string;
	address: string;
	contract: string;
	stackedAmount?: number;
};

export type StorageData = {
	associations: MichelsonMap<string, string>;
	totalStaked: BigNumber;
};

export type AssociationStorage = {
	donators: MichelsonMap<string, number>;
	name: string;
	totalStaked: number;
};
