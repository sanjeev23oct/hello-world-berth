const http = require('http')
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World from Berth!\n')
})
server.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port', process.env.PORT || 3000)
})
