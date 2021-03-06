import express from "express";
import routes from "../routes";
import { getSteamLogin, postSteamLogin } from "../controllers/apiController";

const authApiRouter = express.Router();

authApiRouter.get(routes.steam, getSteamLogin);
authApiRouter.get(routes.steamReturn, postSteamLogin);

export default authApiRouter;
