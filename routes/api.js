'use strict';

//MODULS

const express = require('express');
const router = express.Router();

// MODELS

const Employee = require('../models/Employee');

// API ROUTER

router.get('/employees', async (req,res,next) =>{
  try {
    const allEmployees = await Employee.find();
    if(!allEmployees.length){
      res.status(404);
      res.json({ message: 'employees not found'});
      return;
    }
    res.json(allEmployees);
  } catch (error){
    next(error);
  }
})

router.get('/employees/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const oneEmployee = await Employee.findById(id);
    res.status(200);
    res.json(oneEmployee);
  } catch (error) {
    next(error);
  }
})

router.post('/employee', async (req, res, next) => {
  const employee = req.body;
  console.log(employee);
  if (!employee.username || !employee.password || !employee.email || !employee.phone || !employee.dni || !employee.address) {
    res.status(400);
    res.json({ message: 'some field is missing' });
    return;
  }
  try {
    const newEmployee = await Employee.create(employee);
    res.status(200);
    res.json(newEmployee);

  } catch (error) {
    next(error);
  }
})

module.exports = router;