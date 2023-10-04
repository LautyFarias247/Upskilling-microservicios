const server = require("./src/server")

const PORT = 8002

server.listen(PORT, ()=>console.log(`Microservicio films on en puerto ${PORT}`))