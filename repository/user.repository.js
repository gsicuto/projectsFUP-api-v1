const User = require('../models/User');
const auth = require('../utils/auth.utils')
const ApplicationError = require('../errors/ApplicationError');


class UserRepository {
  constructor(UserModel) {
    this.User = UserModel;
    this.saltRounds = 10;
  }

  async findUser(username) {
    try {
      const user = await this.User.findOne({ username });
      return user;
    } catch (err) {
      throw new ApplicationError(err);
    }
  }

  async register(user) {
    try {
      const { username, password } = user;
      const hash = auth.encrypt(password);
      const newUser = new this.User({ username, hash });
      newUser.save();
    } catch (err) {
      throw new ApplicationError(err);
    }
  }


  async updateUser(userId, updateUser) {
    const { password, username } = updateUser;
    const hash = this.generateHash(password);
    try {
      const updatedUser = await this.User.findByIdAndUpdate(
        userId,
        { username, hash },
      );
      return updatedUser;
    } catch (err) {
      throw new ApplicationError(err);
    }
  }
}

module.exports = new UserRepository(User);
