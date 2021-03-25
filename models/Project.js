const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: String,
    image: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    followUps: [{ type: Schema.Types.ObjectId, ref: 'FollowUp' }],
    presentation: Date,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Project', projectSchema);
