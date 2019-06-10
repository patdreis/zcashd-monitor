import * as bodyParser from "body-parser";
import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import { Routes } from "./Routes";

class App {
    public app: express.Application;

    constructor() {
        this.initCheck();

        this.app = express();

        this.config();
    }

    private config(): void {

        let morganFormat = "dev";
        if (process.env.NODE_ENV === "production") {
            morganFormat = "common";
        }
        this.app.use(cors());

        this.app.use(morgan(morganFormat));

        this.app.use(bodyParser.urlencoded({extended: true }));

        this.app.use(bodyParser.json());

        Routes.configureRoutes(this.app);
    }

    private initCheck(): void {
        console.log("Environment: " + (process.env.NODE_ENV || "dev"));
        console.log("Port: " + (process.env.PORT || 3000));
    }
}

export default new App().app;