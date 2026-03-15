const express = require("express");
const apiRoutes = express.Router();
const userController = require("./controllers/user");
const authMiddleware = require("./util/middleWare");


apiRoutes.post("/createUser", userController.createUser);
apiRoutes.get("/getUser", authMiddleware.verifyToken, userController.getUser);
apiRoutes.put("/updateUser/:id", userController.updateUser);
apiRoutes.delete("/deleteUser/:id", userController.deleteUser);


module.exports = apiRoutes;