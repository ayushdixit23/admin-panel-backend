const mongoose = require("mongoose")

const tokenSchema  = new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    token:{type:String}
})

tokenSchema.index({ userid: 1 });

module.exports = mongoose.model("Token", tokenSchema);