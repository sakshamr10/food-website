const userModel = require("../model/userModel");
const sharp = require("sharp");
const fs = require("fs");
const factory = require("../utility/factory");

module.exports.updateProfileImage = async function updateProfileImage(req, res) {
  // update anything
  //  form data 
  try {
    // console.log(req.file);
    let serverPath = `public/img/users/user-${Date.now()}.jpeg`
    // process
    console.log("I was here");
    await sharp(req.file.path)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(serverPath);
    serverPath = serverPath.split("/").slice(1).join("/");

    let user = await userModel.findById(req.id);

    user.profileImage = serverPath;

    await user.save({ validateBeforeSave: false });
    // console.log("I was here");
    res.status(200).json({
      status: "image uploaded"
    })
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}
module.exports.getUser = factory.getElement(userModel);
module.exports.getAllUser = factory.getAllElement(userModel);
module.exports.updateUser = factory.updateElement(userModel);
module.exports.deleteUser = factory.deleteElement(userModel);
module.exports.createUser = factory.createElement(userModel);