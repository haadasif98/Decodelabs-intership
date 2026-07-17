const validateStudent = (req, res, next) => {

    const { name, age, course } = req.body;

    // Name Validation

    if (!name || name.trim() === "") {

        return res.status(400).json({
            success: false,
            message: "Name is required"
        });

    }

    // Age Validation

    if (!age) {

        return res.status(400).json({
            success: false,
            message: "Age is required"
        });

    }

    if (typeof age !== "number") {

        return res.status(400).json({
            success: false,
            message: "Age must be a number"
        });

    }

    // Course Validation

    if (!course || course.trim() === "") {

        return res.status(400).json({
            success: false,
            message: "Course is required"
        });

    }

    next();

};

module.exports = validateStudent;