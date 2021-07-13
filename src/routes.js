import { Router } from "express";
import AdminUserController from "./app/controller/AdminUserController";
import SessionController from "./app/controller/SessionController";

const routes = new Router();

routes.post("/admin", AdminUserController.store);
routes.post("/session", SessionController.store);

export default routes;
