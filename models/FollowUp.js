const { Schema, model } = require('mongoose');

const fupSchema = new Schema(
  {
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
  },
  {
    timestamps: true,
  },
);

module.exports = model('FollowUp', fupSchema);
