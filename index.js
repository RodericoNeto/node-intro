const express = require('express')

const app = express()

const hostname = '192.168.2.162'
const port = '5000'

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//uri -> 

app.get('/', (req, res) => {
    res.json({
        nome: 'Roderico'

    })
})

app.get('/html', (req, res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, hostname, () => console.log(`http://${hostname}:${port}`))