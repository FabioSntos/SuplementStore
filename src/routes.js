const { Router } = require("express");
const AdminUserController = require("./app/controller/AdminUserController");
const SessionController = require("./app/controller/SessionController");
const ProductPagesController = require("./app/controller/ProductPagesController");

const authMiddleware = require("./app/middlewares/auth");
const DepartmentController = require("./app/controller/DepartmentController");

const routes = new Router();

//login routes
routes.post("/admin", AdminUserController.store);
routes.post("/session", SessionController.session);

//products routes
routes.post("/products", ProductPagesController.store);
routes.get("/products/:id", ProductPagesController.ProductById);
routes.get("/products", ProductPagesController.returnProducts);
routes.get("/", (req, res) => {
  res.status(200);
});

//departments routes
routes.get("/departments", DepartmentController.returnDept);
routes.post("/departments", DepartmentController.store);

routes.use(authMiddleware);

export default routes;
