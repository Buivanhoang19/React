import Joi from "joi"
export const validateObj = Joi.object({
    name: Joi.string().required().empty().trim().messages({
        "any:required": "Tên bắt buộc phải nhập",
        "string.empty":"Tên không được để trống"
    }),
    image: Joi.string().required().empty().trim().messages({
        "any:required": "Ảnh bắt buộc phải nhập",
        "string.empty":"Ảnh không được để trống"
    }),
    price: Joi.number().required().empty().min(1000).messages({
        "any:required": "Tên bắt buộc phải nhập",
        "number.min":"Giá không nhỏ hơn 1000"
    })
})