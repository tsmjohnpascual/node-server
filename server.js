const http = require("http")

const server = http.createServer((res, req) => {
    // server logic

})

server.listen(80, () => {
    console.log("server running on port 80")
})

