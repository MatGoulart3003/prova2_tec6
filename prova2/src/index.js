const express = require('express')
const router =  require('./router')

const app = express()
app.use(express.json())
app.use('/api/v1', router)


app.listen(8087, () => console.log("Server up on port 8087"))