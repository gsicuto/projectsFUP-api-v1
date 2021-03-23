const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      min: 5,
      max: 100,
      unique: true,
    },
    hash: {
      type: String,
      required: true,
      min: 5,
    },
    image: {
      type: String,
      default: 'https://www.google.com/search?q=user+image&tbm=isch&source=iu&ictx=1&fir=yyhmUDD0MVut1M%252CejqRqyK_kr5akM%252C_&vet=1&usg=AI4_-kSaMxKYcc2XBu4UOhyM7UP3afkDOw&sa=X&ved=2ahUKEwim1Ovz-8TvAhUNJ7kGHbzyAmUQ9QF6BAgIEAE#imgrc=yyhmUDD0MVut1M',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('User', userSchema);
