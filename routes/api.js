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

router.get('/employees/:id', async (req, res, next) => {
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

module.exports = router;