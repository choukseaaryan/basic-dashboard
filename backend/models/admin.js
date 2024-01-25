const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    name : {
      type: String,
      default: null,
    },
    email : {
      id : {
        type: String,
        default: null,
      },
      password : {
        type: String,
        default: null,
      },
    },
    phone : {
      type: Number,
      default: null,
    },
    gender : {
      type: String,
      default: null,
    },
    source : {
      type: [String],
      default: null,
    },
    city : {
      type: String,
      default: null,
    },
    state : {
      type: String,
      default: null,
    },
    createdAt : {
      type: Date,
      default: Date.now()
    },
    updatedAt : {
      type: Date,
      default: Date.now()
    }
  }
);

module.exports = model("admin", adminSchema);