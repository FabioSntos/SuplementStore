import { Router } from "express";
import AdminUserController from "./app/controller/AdminUserController";
import SessionController from "./app/controller/SessionController";
import ProductPagesController from "./app/controller/ProductPagesController";

import multer from "multer";
import multerConfig from "./config/multer";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/admin", AdminUserController.store);
routes.post("/session", SessionController.session);
routes.post("/products", ProductPagesController.store);

routes.use(authMiddleware);

export default routes;
