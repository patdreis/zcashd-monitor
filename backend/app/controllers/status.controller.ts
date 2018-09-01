import { Router, Request, Response } from "express";
import { StatusService } from "../services/status.service";


const router: Router = Router();

router.get("/", get);

export async function get (req: Request, res: Response) {
    const statusService = new StatusService();
    const info = await statusService.getInfo();
    const peers = await statusService.getPeerinfo();

    const complete = {
        info,
        peers
    };

    res.send(complete);
}

export const StatusController: Router = router;