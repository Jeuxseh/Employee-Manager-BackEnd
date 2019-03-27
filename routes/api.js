'use strict';
const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee');

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