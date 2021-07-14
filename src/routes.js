import { Router } from "express";
import AdminUserController from "./app/controller/AdminUserController";
import SessionController from "./app/controller/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/admin", AdminUserController.store);
routes.post("/session", SessionController.session);
routes.get("/products");

routes.use(authMiddleware);

routes.post("/products");

export default routes;
