import { MichelsonMap } from "@taquito/taquito";

export type StorageData = {
	associations: MichelsonMap<string, any>;
	donators: MichelsonMap<string, any>;
};
