import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      username: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      firstname: {
         type: String,
         required: true,
      },
      lastname: {
         type: String,
         required: true,
      },
      isAdmin : {
         type: Boolean,
         default: false,
      },
      profilePicture: String,
      coverPicture: String,
      followers: [],
      followings: [],
      about: String,
      livesIn: String,
      worksAt: String,
      country: String,
      relationship: String
   },
   { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;