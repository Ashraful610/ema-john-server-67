const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json())



app.get('/' , (req , res) => {
    res.send(' ema-john-server mongodb setup is done')
})

app.listen(port , () => {
    console.log('ema-john-server-connected' , port)
})