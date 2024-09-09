const taskSchema = require('./taskValidator'); // Import the Joi schema

// Validation function
const validateTask = (data) => {
    const { error } = taskSchema.validate(data);
    if (error) {
        return { isValid: false, message: error.details[0].message };
    }
    return { isValid: true };
};

module.exports = { validateTask };
