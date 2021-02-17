const express = require('express')
const app = express()
// const socket = require('socket.io')
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const api = require('./routes/api');
require('dotenv').config();




app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors({ origin: true, credentials: true }));
// app.use(cors());


// app.get('/hell', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
// console.log(__dirname);
///hello


app.use('/', api)

// app.get('/', (req,res)=>{
//     res.render()
// })

// const port = 80
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
// const server = app.listen(port, () => {
//     console.log(`running on port ${port}`);
// });

// io = socket(server)
// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('join_room', (data) => {
//         socket.join(data)
//         console.log(data);
//     })


//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//         console.log('message: ' + msg);
//     });
// });
// http.listen(3003, () => {
//     console.log('listening on *:3003');
// });

mongoose.connect('mongodb+srv://asi:Asi123321@gig.jr1wz.mongodb.net/gig', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
// mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    // 'mongodb+srv://asi:Asi123321@gig.jr1wz.mongodb.net/gig'
