import Joi  from "joi"




const createUser = Joi.object({
    first_name:Joi.string().min(2).required(),
    last_name:Joi.string().min(2).required(),
    email:Joi.string().email().required(),
    age:Joi.number().min(18).max(50).required(),
    password:Joi.string().min(4).required()
}).required()

const logIn = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(4).required()
}).required()


export {
    createUser,
    logIn
}