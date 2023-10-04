const server = require("./src/server")

const PORT = 8001

server.listen(PORT, ()=>console.log(`Microservicio characters on en puerto ${PORT}`))