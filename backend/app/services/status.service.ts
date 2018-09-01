
import { RpcHandler } from "../helper/rpc-handler";

export class StatusService {

    private rpcHandler: RpcHandler;

    constructor() {
        this.rpcHandler = new RpcHandler("http://patdreis.ddns.net:8232");
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