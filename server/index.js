const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const userPost = require('./routes/api/users');
const blogPost = require('./routes/api/blogs');
const newsPost = require('./routes/api/news')
app.use('/api/users',userPost);
app.use('/api/blogs',blogPost);
app.use('/api/news',newsPost)
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`server started on port ${port}`));