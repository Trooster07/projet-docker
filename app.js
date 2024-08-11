const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"java script",
       "description":"comment devenir full stack"

    },
    {
      "id":"2",
      "title":"data",
      "description":"c'est quoi un data scientist"
    },
    {
      "id":"3",
      "title":"sig",
      "description":"traiter un image satelitaire en teledetection"
    }
  ])
})

app.listen(4000, () => {
  console.log('le port 4000 est pret')
})