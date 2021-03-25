const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: String,
    image: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    presentation: Date,
    // followUps: [{ type: Schema.Types.ObjectId, ref: 'FollowUps' }],
  },
  {
    timestamps: true,
  },
);

module.exports = model('Project', projectSchema);
