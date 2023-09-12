import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   require: true,
  //   unique: true,
  // },
  // email: {
  //   type: String,
  //   require: true,
  //   unique: true,
  // },
  // password: {
  //   type: String,
  //   require: true,
  // },
  // role: {
  //   type: String,
  //   require: true,
  // },
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
