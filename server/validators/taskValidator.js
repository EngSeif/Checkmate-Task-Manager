const Joi = require('joi');

// Schema for task validation
const taskAddSchema = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().optional(),
    priority: Joi.string().valid('high', 'medium', 'low').required(),
    checked: Joi.boolean().required()
});
const taskUpdateSchema = Joi.object({
    title: Joi.string().min(1).optional(),
    description: Joi.string().optional(),
    priority: Joi.string().valid('high', 'medium', 'low').optional(),
    checked: Joi.boolean().optional()
});

module.exports = { taskAddSchema, taskUpdateSchema };
