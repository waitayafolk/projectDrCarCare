const express = require('express');
const app = express.Router();

const customer = require('./Module_customer/customer')

app.get('/', customer.getCustimer)
app.post('/save-customer', customer.saveCustomer)
// app.get('/company', admin.getCompany)
// app.post('/save-setting', admin.saveSetting)
// app.delete('/:id', admin.deleteAdmin)

// app.get('/title', admin.getTitle)
// app.post('/save-title', admin.saveTitle)



// app.delete('/delete-admin/:id', admins.deleteAdmin)


module.exports = app