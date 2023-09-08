const express = require('express');
const app = express.Router();

const company = require('./Module_company/company')

app.get('/', company.getCompany)
app.post('/save-company', company.saveCompany)
module.exports = app