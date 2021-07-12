import { Router } from "express";
import AdminUserController from "./app/controller/AdminUserController";

const routes = new Router();

//routes.put('/products:id', ProductController.update);
routes.post("/admin", AdminUserController.store);
export default routes;

// fix
