const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const post = require('./routes/api/users');
app.use('/api/users',post);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`server started on port ${port}`));