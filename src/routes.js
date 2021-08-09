import { Router } from "express";
import AdminUserController from "./app/controller/AdminUserController";
import SessionController from "./app/controller/SessionController";
import ProductPagesController from "./app/controller/ProductPagesController";

import authMiddleware from "./app/middlewares/auth";
import DepartmentController from "./app/controller/DepartmentController";

const routes = new Router();

//login routes
routes.post("/admin", AdminUserController.store);
routes.post("/session", SessionController.session);

//products routes
routes.post("/products", ProductPagesController.store);
routes.get("/products/:id", ProductPagesController.ProductById);
routes.get("/products", ProductPagesController.returnProducts);
routes.get("/", () => {
  res.status(200);
});

//departments routes
routes.get("/departments", DepartmentController.returnDept);
routes.post("/departments", DepartmentController.store);

routes.use(authMiddleware);

export default routes;
