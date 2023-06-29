import bc from "bcryptjs"
import userModel from "../../../DB/models/user.model.js"
import { tokenGeneration } from "../../utils/TokenFunction.js"


export const signUp = async (req, res, next) => {
    if (await userModel.findOne({ email: req.body.email })) return next(new Error("email already exist"))
    
    const hashPass = bc.hashSync(req.body.password, 8)
    req.body.password =hashPass
    const newUser = new userModel(req.body)
    const token = tokenGeneration({ payload: {newUser} })
    const user =await newUser.save()
    res.status(201).json({ message: "success", user })
}

export const login = async (req, res, next) => {
    const user = await userModel.findOne({email : req.body.email})
    if (!user) return next(new Error("invalid email information"))
    const checkPass = bc.compareSync(req.body.password, user.password)
    if (!checkPass) return next(new Error("invalid password information"))
    const token = tokenGeneration({ payload: { id: user._id } })
    res.status(201).json({ message: "success", token })
}
