const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: Object
  },
  {
    timestamps: true
  }
);

module.exports = model('movies', movieSchema);