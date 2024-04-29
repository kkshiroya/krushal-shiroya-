const Joi = require("joi");

const adduser = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    body: Joi.string().required().trim(),
    createdby: Joi.string().required().trim(),
    geoloction: Joi.string().required().trim(),
  }),
};

module.exports = {
  adduser,
};
