const server = require("./src/server")

const PORT = 8003

server.listen(PORT, ()=>console.log(`Microservicio films on en puerto ${PORT}`))