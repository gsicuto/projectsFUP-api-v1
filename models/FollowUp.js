const { Schema, model } = require('mongoose');

const fupSchema = new Schema(
  {
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
  },
  {
    timestamps: true,
  },
);

module.exports = model('FollowUp', fupSchema);
