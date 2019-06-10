
import { RpcHandler } from "../helper/rpc-handler";

export class StatusService {

    private rpcHandler: RpcHandler;

    constructor() {
        const address = process.env.ZNODE_ADDR ? process.env.ZNODE_ADDR : "";
        this.rpcHandler = new RpcHandler(address);
    }

    public async getInfo(): Promise<any> {

        const response = await this.rpcHandler.exec("getinfo");
        return response.data.result;
    }

    public async getPeerinfo(): Promise<any> {

        const response = await this.rpcHandler.exec("getpeerinfo");
        return response.data.result;
    }
}