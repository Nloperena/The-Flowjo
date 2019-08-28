var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 8080

const socketManager = require('./socketManager')

io.on('connection', socketManager)

app.listen(PORT, ()=>{
    console.log("Connected to port:" + PORT)
})