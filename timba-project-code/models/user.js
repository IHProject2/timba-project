<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const reviewSchema = require('./review');
const requestSchema = require('./request');

const userSchema = Schema({
  username: {type: String, required: true, unique: true},
  email:    {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isHost: {type: Boolean, default: false},
  photo: {type: String, default:'../uploads/defaultimageuser'},
  level: {type: Number, default: 1},
  reviews: [reviewSchema.schema],
  stats: [Number], // [v1, v2, v3, v4]
  requests: [requestSchema.schema],
  totalGames: Number,
  validGames: Number,
  location: { type: { type: String }, coordinates: [Number] }
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
}
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = require("./review");
const requestSchema = require("./request");

const userSchema = Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isHost: { type: Boolean, default: false },
    photo: { type: String, default: "../uploads/defaultimageuser" },
    level: { type: Number, default: 1 },
    reviews: [reviewSchema.schema],
    stats: {type: [], default: [1, 1, 1, 1] },
    requests: [requestSchema.schema],
    totalGames: Number,
    validGames: Number,
    //  location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
>>>>>>> efaca795a4b0916e50edbcc3270dfa7a11afd5c5
);

//userSchema.index({ location: '2dsphere' });
const User = mongoose.model("User", userSchema);
module.exports = User;