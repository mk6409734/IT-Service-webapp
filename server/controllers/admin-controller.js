const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const { json } = require("express");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, {password: 0});
        console.log(users);
        
        if(!users || users.length === 0){
            return res.status(404).json({message: "No Users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    console.log(contact);

    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
}

// get user data

const getUserById = async(req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({_id: id}, {password: 0}); 
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}
// update to data
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );

    if (updatedData.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "User not found or no changes made" });
    }
    return res
      .status(200)
      .json({ message: "User updated successfully", updatedData });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error while updating user" });
  }
};

// Delete User data
const deleteUserById = async(req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({_id: id})
    return res.status(200).json({message: "User Deleted Successfully"});
  } catch (error) {
    next(error)
  }
}

// Delete Contact data
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContact,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};