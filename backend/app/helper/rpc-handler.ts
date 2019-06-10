import axios, { AxiosRequestConfig } from "axios";

export class RpcHandler {

    private url: string;
    private config: AxiosRequestConfig;

    constructor(url: string) {
        this.url = url;
        const username = process.env.ZNODE_USER ? process.env.ZNODE_USER : "";
        const password = process.env.ZNODE_PASS ? process.env.ZNODE_PASS : "";
        this.config = {
            headers: { "content-type": "text/plain" },
            auth: {username, password}
        };
    }

    public exec(method: string) {
        const bodyContent = {
            jsonrpc: 1.0, 
            id: "curltext",
            method: method,
            params: [] };
    
        return axios.post(this.url, bodyContent, this.config);
    }
}