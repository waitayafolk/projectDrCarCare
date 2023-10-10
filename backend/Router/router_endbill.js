const express = require('express');
const app = express.Router();

const endbill = require('./Module_endbill/endbill')

app.post('/', endbill.endbill)
app.post('/bill', endbill.getBill)
app.post('/update', endbill.update)
app.post('/pay', endbill.pay)
app.delete('/:id', endbill.del)
app.post('/packet', endbill.endbillPacket)

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