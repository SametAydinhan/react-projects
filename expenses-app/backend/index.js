const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const path = require("path");
mongoose
  .connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("veritabanına bağlanıldı"))
  .catch((hata) => console.log(`veritabanı baglantı hatası ${hata}`));


  const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
   
    },
    date: {
        type: Date,
        required:true,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port " + process.env.PORT);
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});
 
app.post("/register", async (req, resp) => {
    try {
        console.log(req.body.expenseData);
        const user = new User(req.body.expenseData);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.get("/register" , async (req,resp) => {
    const _bulunanUser = await User.find()
    resp.send(_bulunanUser);
})
app.listen(process.env.PORT);