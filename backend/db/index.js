const mongoose = require("mongoose")

const URI = "mongodb+srv://gonzalo:14781716asd@cluster0prueba.cz9qc.mongodb.net/patitas?retryWrites=true&w=majority"

const connectDB = async ()=> {
  await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true })
  console.log("Conectado a la DB de Mongo Atlas")
}

module.exports = connectDB