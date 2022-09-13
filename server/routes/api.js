const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE
router.post('/', async (req, res) => {
    const newStudent = new Student({
        id: req.body.id,
        first: req.body.first,
        surname: req.body.surname,
        section: req.body.section,
    });
    
    try {
        const saveStudent = await newStudent.save();
        res.json(saveStudent);
    } catch (err) {
        console.log({ message: err });
    }
});

// READ
router.get('/', async (req, res) => {
    try {
        const getStudents = await Student.find();
        res.json(getStudents);
    } catch (err) {
        console.log({ message: err });
    }
});

router.get('/:studentId', async (req, res) => {
    try {
        const findStudent = await Student.findById(req.params.id);
        res.json(findStudent);
    } catch (err) {
        console.log({ message: err });
    }
});

// UPDATE
router.patch('/:studentId', async (req, res) => {
    try {
        const updateStudent = await Student.updateOne({ id: req.params.studentId }, { $set: {first: req.body.first, surname: req.body.surname, section: req.body.section} });
        res.json(updateStudent);
    } catch (err) {
        console.log({ message: err });
    }
});

// DELETE
router.delete('/:studentId', async (req, res) => {
    try {
        const deleteStudent = await Student.remove({ _id: req.params.studentId });
        res.json(deleteStudent);
    } catch (err) {
        console.log({ message: err });
    }
});

module.exports = router;