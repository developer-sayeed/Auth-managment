const mongoose = require("mongoose");

// Create a Schama

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
    },
    username: {
      type : String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      minlength: 10,
      maxLength: 20,
      unique: true,
    },

    age: {
      type: Number,
      min: 1,
      max: 100,
    },
    skill: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    gallery: {
      type: Array,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    accessToken: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create Collection

module.exports = mongoose.model("User", userSchema);
