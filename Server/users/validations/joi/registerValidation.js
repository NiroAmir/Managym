const Joi = require("joi");

const registerValidation = (registeredUser) => {
  const schema = Joi.object({
    name: {
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(2).max(256),
      last: Joi.string().min(2).max(256).required(),
    },

    isTrainee: Joi.boolean().required(),

    phone: Joi.string()
      .regex(/^(?:\+9725|05)\d{8}$/)
      .required(),

    email: Joi.string().regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    ),

    password: Joi.string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/
      )
      .required(),
    image: {
      url: Joi.string()
        .regex(
          /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
        )
        .optional(),
      alt: Joi.string().min(2).max(256).optional(),
    },
    address: {
      state: Joi.string().min(2).max(256).optional(),
      country: Joi.string().min(2).max(256).required(),

      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.string()
        .min(1)
        .regex(/^[1-9][0-9]*$/)
        .required(),
      zip: Joi.string().min(4).required(),
    },
  });

  return schema.validate(registeredUser);
};

module.exports = registerValidation;
