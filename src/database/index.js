const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(

    "mongodb+srv://dev001:hGzgNjZLWKor0XkB@cluster0.6j5yu.mongodb.net/acad?retryWrites=true&w=majority",
    //process.env.DATABASE || "mongodb://127.0.0.1:27017/endurance",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose;