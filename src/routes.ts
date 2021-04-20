import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

/**
 * Parameters Types
 * Routes Params => Route parameters
 * Query Params => Filter and searches
 * Body Params => {
 *  objects
 * }
 */

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes };
