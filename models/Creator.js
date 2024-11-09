const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const creatorSchema = new mongoose.Schema({
	name: { type: String },
	email: { type: String },
	userId :{type:ObjectId,ref:"User"}
},
	{ timestamps: true }
);

module.exports = mongoose.model("Creator", creatorSchema);
