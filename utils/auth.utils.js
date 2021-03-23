const bcrypt = require('bcryptjs');

class AuthUtils {
  constructor() {
    this.salt = 10;
  }

  encrypt(password) {
    return bcrypt.hashSync(password, this.salt);
  }

  compare(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}
module.exports = new AuthUtils();
