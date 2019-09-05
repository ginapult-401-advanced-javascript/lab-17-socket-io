'use strict';

const socketIO = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const fileConnection = socketIO.connect(`${API_URL}/files`);

fileConnection.on('readFiles', payload => {
    console.log(payload);
    console.log(payload.toString().toUpperCase();
});