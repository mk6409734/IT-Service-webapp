const express = require('express');
const router = express.Router();
const adminroute = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware  = require('../middlewares/admin-middleware');

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminroute.getAllUsers);
// to get the user data  
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminroute.getUserById);
// to update the user data  
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminroute.updateUserById);
// to delete the user data  
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminroute.deleteUserById);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminroute.getAllContact);
// To delete Contact data  
router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminroute.deleteContactById);

module.exports = router;