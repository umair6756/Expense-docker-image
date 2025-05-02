
const mongoose = require("mongoose");

const connectDB = async() => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => console.log("Connected successfully ...")).
    catch(error => console.log(error))
}

module.exports = connectDB
