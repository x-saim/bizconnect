// This file is created by Mitali
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        comment: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('posts', postSchema);
