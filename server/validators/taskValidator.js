const Joi = require('joi');

// Schema for task validation
const taskSchema = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().optional(),
    priority: Joi.string().valid('high', 'medium', 'low').required(),
    checked: Joi.boolean().optional()
});

module.exports = taskSchema;
