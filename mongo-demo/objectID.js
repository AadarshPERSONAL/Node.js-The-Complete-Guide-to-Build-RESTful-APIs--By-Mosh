// 12 bytes
    //4 bytes: Timestamp
    //3 bytes: machine identifier
    //2 bytes: process identifier
    //3 bytes: counter

// objectIDs are being generated by mongoDB driver
const mongoose = require('mongoose')

const id = mongoose.Types.ObjectId();
console.log(id,id.getTimestamp());