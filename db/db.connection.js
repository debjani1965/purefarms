const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/purefarms', {useNewUrlParser: true, useUnifiedTopology: true});
const dbUrl = "mongodb+srv://shelly:test123@learnmongo.05bfw.mongodb.net/purefarms?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          console.log("Connected to db")
        })
        .catch((err) => {
          console.log('Connection failed', err)
        });
        
module.exports = mongoose;