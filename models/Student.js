const { Schema, model } = require('mongoose');
const ApplicationError = require('../errors/ApplicationError');

const studentSchema = new Schema(
  {
    name: String,
    project: {
      type: Schema.Types.ObjectId, ref: 'Project',
    },
  },
  {
    timestamps: true,
  },
);

studentSchema.statics.validateUpdateParams = (req, res, next) => {
  if (req.body.name) {
    return next();
  }
  throw new ApplicationError({ message: 'Invalid fields', status: 401 });
};

module.exports = model('Student', studentSchema);
