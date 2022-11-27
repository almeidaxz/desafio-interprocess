const validatePatientData = (joiSchema) => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    validatePatientData
}