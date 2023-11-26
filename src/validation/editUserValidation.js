import Joi from "joi";
import validation from "./validation";

const editUserSchema = Joi.object({
    first: Joi.string().min(2).max(256).required(),
    middle: Joi.string().min(2).max(256).allow(""),
    last: Joi.string().min(2).max(256).required(),
    phone: Joi.string()
        .min(9)
        .max(11)
        .pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
        .required().messages({ "string.pattern.base": "number is not valid" }),
    url: Joi.string().min(14).required(),
    alt: Joi.string().min(2).max(256).required(),
    state: Joi.string().min(2).max(256).allow(""),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().min(2).max(256).required(),
    zip: Joi.number().min(2).max(256).required(),
});

const validateEditUser = (inputToCheck) =>
    validation(editUserSchema, inputToCheck);

export { validateEditUser };