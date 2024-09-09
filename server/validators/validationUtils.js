const {taskAddSchema, taskUpdateSchema} = require('./taskValidator'); 

// Validation function
const validateAddedTask = (data) => {
    const { error } = taskAddSchema.validate(data);
    if (error) {
        return { isValid: false, message: error.details[0].message };
    }
    return { isValid: true };
};

const validateUpdatedTask = (data) => {
    const { error } = taskUpdateSchema.validate(data);
    if (error) {
        return { isValid: false, message: error.details[0].message };
    }
    return { isValid: true };
};

module.exports = { validateAddedTask, validateUpdatedTask };
