const express = require('express');
const app = express.Router();

const service = require('./Module_service/service')

app.get('/', service.getService)
app.post('/save-service', service.saveService)
app.delete('/:id', service.deleteService)
app.get('/service_id/:id', service.getServiceByid)

app.get('/group', service.getServiceGroup)
app.post('/save-service/group', service.saveServiceGroup)
app.delete('/group/:id', service.deleteServiceGroup)

// app.get('/title', admin.getTitle)
// app.post('/save-title', admin.saveTitle)



// app.delete('/delete-admin/:id', admins.deleteAdmin)


module.exports = app