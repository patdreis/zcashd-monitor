import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class RpcHandler {

    private url: string;
    private config: AxiosRequestConfig;

    constructor(url: string) {
        this.url = url;
        this.config = {
            headers: { "content-type": "text/plain" },
            auth: {username: "komibomi", password: "Pm/pd7ZLvBj+gXD6lUY6XU+1rlnAF6WVs/60AipQSBg="}
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