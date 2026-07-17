const students = require("../data/students");



// GET All Students

const getAllStudents = (req, res) => {

    res.status(200).json({
        success: true,
        totalStudents: students.length,
        data: students
    });

};



// GET Student By ID

const getStudentById = (req, res) => {

    const id = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {

        return res.status(404).json({
            success: false,
            message: "Student Not Found"
        });

    }

    res.status(200).json({
        success: true,
        data: student
    });

};



// ADD Student

const addStudent = (req, res) => {

    const { name, age, course } = req.body;

    const newStudent = {

        id: students.length + 1,
        name,
        age,
        course

    };

    students.push(newStudent);

    res.status(201).json({

        success: true,
        message: "Student Added Successfully",

        data: newStudent

    });

};



// UPDATE Student

const updateStudent = (req, res) => {

    const id = Number(req.params.id);

    const { name, age, course } = req.body;

    const student = students.find((student) => student.id === id);

    if (!student) {

        return res.status(404).json({

            success: false,

            message: "Student Not Found"

        });

    }

    student.name = name;

    student.age = age;

    student.course = course;

    res.status(200).json({

        success: true,

        message: "Student Updated Successfully",

        data: student

    });

};



// DELETE Student

const deleteStudent = (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex((student) => student.id === id);

    if (index === -1) {

        return res.status(404).json({

            success: false,

            message: "Student Not Found"

        });

    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({

        success: true,

        message: "Student Deleted Successfully",

        data: deletedStudent

    });

};



module.exports = {

    getAllStudents,

    getStudentById,

    addStudent,

    updateStudent,

    deleteStudent

};