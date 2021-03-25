const FollowUp = require('../models/FollowUp');
const ApplicationError = require('../errors/ApplicationError');


class FupRepository {
  constructor(FupModel) {
    this.Fup = FupModel;
  }

  async create(fup, userId) {
    try {
      const newFup = new this.Fup(
        {
          created_by: userId,
          content: fup,
        },
      );
      return await newFup.save();
    } catch (err) {
      throw new ApplicationError(err);
    }
  }


  async updateOne(fupId, updateFup) {
    try {
      const updatedFup = await this.Fup.findByIdAndUpdate(
        fupId,
        updateFup,
      );
      return updatedFup;
    } catch (err) {
      throw new ApplicationError(err);
    }
  }

  async deleteOne(fupId) {
    try {
      await this.Fup.findByIdAndDelete(fupId);
    } catch (error) {
      throw new ApplicationError(error);
    }
  }
}

module.exports = new FupRepository(FollowUp);
