

const { default: mongoose } = require('mongoose');
require('dotenv').config()


async function connectdb() {
 
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(process.env.MONGO_URI);
    // Send a ping to confirm a successful connection
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
}
module.exports= connectdb
