// import express from "express";
// import {
//   registerController,
//   loginController,
//   testController,
//   forgotPasswordController 
// } from "../controllers/authController.js";
// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// //router object
// const router = express.Router();

// //routing
// //REGISTER || METHOD POST
// router.post("/register", registerController);

// // registerController is a callback function

// //LOGIN || POST
// router.post("/login", loginController);
 
// // loginController is a callback function

// //forget password
// router.post("/forgot-password", forgotPasswordController);

// //test routes
// router.get("/test", requireSignIn,isAdmin,testController);

// //protected route for showing user his dashboard
// router.get("/user-auth", requireSignIn,(req,res)=>{
//   res.status(200).send({ok:true});
// });

// //protected route for showing admin his dashboard
// router.get("/admin-auth", requireSignIn,isAdmin,(req,res)=>{
//   res.status(200).send({ok:true});
// });
// export default router;









import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;