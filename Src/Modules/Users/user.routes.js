import { Router } from "express";
import *as controllers from "./user.controller.js";
import *as validators from "./user.validation.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import { validationMiddle } from "../../utils/validation.middle.js";




const router = Router()


router.post("/signUp",validationMiddle(validators.createUser), asyncHandler(controllers.signUp))
router.post("/login",validationMiddle(validators.logIn),asyncHandler(controllers.login))










export default router