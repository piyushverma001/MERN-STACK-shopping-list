const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const items = require('./routes/api/Items')


const app = express();

// body parser

app.use(bodyParser.json());

// DB Config

const db = require('./config/keys').mongoURI;

//connect
mongoose
    .connect(db,{ useUnifiedTopology: true,useNewUrlParser:true})
    .then(()=> console.log("mongodb connected..."))
    .catch(err => console.log(err));

    //use Routes
    app.use('/api/items', items);


//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`server started on port ${port}`));