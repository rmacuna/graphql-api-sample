// const mongoose = require('mongoose');
// const { scheduleSchema } = require('./Schedule');

// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     id: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// userSchema.methods.getId = function getId() {
//   const doc = this.toObject();
//   // eslint-disable-next-line no-underscore-dangle
//   return doc._id.toString();
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;