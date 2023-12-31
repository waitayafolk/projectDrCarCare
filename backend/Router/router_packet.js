const express = require('express');
const app = express.Router();

const packet = require('./Module_packet/packet')

app.get('/', packet.getPacket)
app.post('/save', packet.save)
app.delete('/:id', packet.del)
app.post('/save-packet', packet.save_packet)
app.get('/packet-sale', packet.packet_sale)
// app.post('/update', endbill.update)
// app.post('/pay', endbill.pay)
// app.delete('/:id', endbill.del)

module.exports = app