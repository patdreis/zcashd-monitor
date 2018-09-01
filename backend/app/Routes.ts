import express from "express";
import { StatusController } from "./controllers";

export class Routes {

    public static configureRoutes(app: express.Application) {

        const routes: express.Router = express.Router();

        app.use("/", routes);
        routes.use("/status", StatusController);
    }
}