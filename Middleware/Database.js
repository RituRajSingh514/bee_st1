const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://frostc010123:raj1010@cluster0.edffmpq.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log(err));
