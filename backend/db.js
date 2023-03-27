const mongoose=require("mongoose");
const url=`mongodb+srv://gsc12:modijiincongress%408793@cluster0.l2svoyb.mongodb.net/?retryWrites=true&w=majority`;
module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };