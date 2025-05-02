import Login from "../controllers/Buyersauthentication/Login.js";
import Signup from "../controllers/Buyersauthentication/Signup.js";
import LogoutBuyer from "../controllers/Buyersauthentication/LogoutBuyer.js";
import express from "express"
const routerBuy=express.Router();
routerBuy.post("/buyer/signup",Signup)
routerBuy.post("/buyer/login",Login)
routerBuy.post("/buyer/logout",LogoutBuyer)
export default routerBuy