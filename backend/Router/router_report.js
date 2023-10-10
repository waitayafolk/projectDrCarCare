const express = require('express');
const app = express.Router();

const report = require('./Module_report/report')

app.post('/day', report.day)
app.post('/month', report.month)
app.post('/dashbord', report.dashbord)
app.post('/getBill', report.getBill)


// app.post('/save-service', service.saveService)
// app.delete('/:id', service.deleteService)
// app.get('/service_id/:id', service.getServiceByid)

// app.get('/group', service.getServiceGroup)
// app.post('/save-service/group', service.saveServiceGroup)
// app.delete('/group/:id', service.deleteServiceGroup)

// app.get('/title', admin.getTitle)
// app.post('/save-title', admin.saveTitle)



// app.delete('/delete-admin/:id', admins.deleteAdmin)


module.exports = app