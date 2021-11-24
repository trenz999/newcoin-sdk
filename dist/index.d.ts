import { GetTransaction } from "@eoscafe/hyperion";
import { NCCreateUser, NCReturnTxs, NCCreatePool, NCStakeToPool, NCMintAsset, NCGetAccInfo, NCGetPoolInfo, NCPoolsInfo, NCReturnInfo } from "./types";
export * from './types';
/**
 * The primary tool to interact with [https://newcoin.org](newcoin.org).
 *
 * This is an early alpha.
 *
 * See [https://docs.newcoin.org/](https://docs.newcoin.org/) for an overview of the newcoin ecosystem.
 */
export declare class NCO_BlockchainAPI {
    /** @internal */
    private _url;
    /** @internal */
    private _h_url;
    /**
     * Init the api
     * @name newcoin-api
     * @param bc_url - newcoin url - http://testnet.newcoin.org
     * @param hyp_url - hyperion url - http://hyperion.newcoin.org
     * @returns a Newcoin API instance
     */
    constructor({ bc_url, hyp_url }: {
        bc_url: string;
        hyp_url: string;
    });
    /**
     * Create a user
     * NOTE: New collection, schema and template names are formed from user name with c, s and t replacing the dot in the user name.
     * @returns Create User transaction id
     */
    createUser(inpt: NCCreateUser): Promise<NCReturnTxs>;
    /**
     * Create a poll.
     * @returns Create Pool transaction id
     */
    createPool(inpt: NCCreatePool): Promise<NCReturnTxs>;
    /**
     * Stake to pool
     * @returns Create Pool transaction id
     */
    stakeToPool(inpt: NCStakeToPool): Promise<NCReturnTxs>;
    /**
     * Mint an asset
     * @returns Create Pool transaction id
     */
    mintAsset(inpt: NCMintAsset): Promise<NCReturnTxs>;
    /**
     * Get trasaction data
     * @returns Tx data
     */
    getTxData(txid: string): Promise<GetTransaction<unknown>>;
    /**
     * Get account balance
     * @returns Tx data
     */
    getAccountBalance(acc: NCGetAccInfo): Promise<NCReturnInfo | undefined>;
    /**
     * Get pool info
     * @returns Tx data
     */
    getPoolInfo(acc: NCGetPoolInfo): Promise<NCPoolsInfo>;
}