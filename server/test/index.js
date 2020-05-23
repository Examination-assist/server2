const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('cors')())

app.post('/api/upload_audio', (req, res) => {
	console.log(req.body)
	// console.log(req.body.filename)
})

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

app.get('/',async (req,res)=>{
	data=await readFile('./audio');
	res.send(data)
})

app.listen(8080)