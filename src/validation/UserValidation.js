const joi = require("joi");
const createUserValidation = async (req, res, next) => {
    const schema = joi.object({
        username: joi.string().required().trim().strict().max(12),
        password: joi.string().required().trim().strict(),
        dob: joi.date().required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
    try {
        await schema.validateAsync({ ...req.body }, { abortEarly: true })
    } catch (err) {
        next(err)
    }
}
module.exports = {
    createUserValidation
}