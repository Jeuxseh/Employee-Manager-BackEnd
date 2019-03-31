'use strict';

//MODULS

const express = require('express');
const router = express.Router();

// MODELS

const Employee = require('../models/Employee');
const Admin = require('../models/Admin');

// API ROUTER

router.get('/employees', async (req, res, next) => {
  const { _id } = req.session.currentUser;
  try {
    const myEmployees = await Employee.find({ adminId: _id })
    res.json(myEmployees);
  } catch (error) {
    next(error)
  }
})

router.get('/user', async (req, res, next) => {
  const { _id } = req.session.currentUser;
  try {
    const currentUser = await Admin.find({_id: _id})
    res.json(currentUser);
  } catch (error) {
    next(error)
  }
})

router.get('/employee/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const oneEmployee = await Employee.findById(id);
    res.status(200);
    res.json(oneEmployee);
  } catch (error) {
    next(error);
  }
})

router.post('/employee', async (req, res, next) => {
  let employeeData = req.body;
  employeeData.adminId = req.session.currentUser._id;
  if (!employeeData.username || !employeeData.password || !employeeData.email || !employeeData.phone || !employeeData.dni || !employeeData.address) {
    res.status(400);
    res.json({ message: 'some field is missing' });
    return;
  }
  try {
    const newEmployee = await Employee.create(employeeData);
    res.status(200);
    res.json(newEmployee);

  } catch (error) {
    next(error);
  }
})


router.put('/employee/:id', async (req, res, next) => {
  let employeeData = req.body;
  const { id } = req.params;
  if (!employeeData.username || !employeeData.email || !employeeData.phone || !employeeData.dni || !employeeData.address) {
    res.status(400);
    res.json({ message: 'some field is missing' });
    return;
  }
  try {
    const editedEmployee = await Employee.findByIdAndUpdate(id, employeeData, { new: true });
    res.status(200);
    res.json({ message: 'Employee Updated', data: editedEmployee })
  } catch (error) {
    next(error);
  }
});

router.put('/user', async (req,res,next)=> {
  let currentUserData = req.body;
  const { _id } = req.session.currentUser;
  if (!currentUserData.username || !currentUserData.email || !currentUserData.phone || !currentUserData.company || !currentUserData.address) {
    res.status(400);
    res.json({ message: 'Some field is missing' });
    return;
  }
  try {
    const editedUser = await Admin.findByIdAndUpdate(_id, currentUserData, {new:true});
    req.session.currentUser = editedUser;
    res.status(200)
    res.json({message: 'User Data', data: editedUser})
  } catch (error) {
    next(error);
  }

})

router.delete('/employee/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    res.status(200);
    res.json({ message: 'Employee Deleted', data: deletedEmployee });
  } catch (error) {
    next(error);
  }
})

module.exports = router;