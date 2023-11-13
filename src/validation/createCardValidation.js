import Joi from "joi";
import validation from "./validation";

const createCardSchema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    phone: Joi.string()
        .min(9)
        .max(11)
        .pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(5)
        .required(),
    web: Joi.string().min(14).allow(""),
    url: Joi.string().min(14).allow(""),
    alt: Joi.string().min(2).max(256).allow(""),
    state: Joi.string().allow(""),
    country: Joi.string().required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    houseNumber: Joi.number().min(1).required(),
    zip: Joi.number().allow(""),
});

const validateCreateCard = (inputToCheck) =>
    validation(createCardSchema, inputToCheck);

export { validateCreateCard };