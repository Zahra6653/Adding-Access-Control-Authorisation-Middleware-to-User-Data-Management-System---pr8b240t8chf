const express = require("express");

const {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userControllers");

const grantAccessTo = require("../middlewares/grantAccessTo");

const router = express.Router();

/*
router.get("/"): Should be accessible to roles user, admin, and superadmin. This route is used to retrieve all users.
router.get("/:id"): Should be accessible to roles user, admin, and superadmin. This route is used to retrieve a user by their ID.
router.post("/"): Should be accessible to roles guest, user, admin, and superadmin. This route is used to create a new user.
router.patch("/:id"): Should be accessible to roles admin and superadmin. This route is used to update an existing user.
router.delete("/:id"): Should be accessible to role superadmin only. This route is used to delete an existing user.
*/

//Add middlewares here
router.get("/", getAllUsers);
router.get("/:id", getUserByID);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;