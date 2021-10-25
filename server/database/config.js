const mongoose = require("mongoose");

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

function connect() {
  mongoose.connection.on("error", console.error).on("disconnected", connect);

  return mongoose.connect(uri, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connect();
