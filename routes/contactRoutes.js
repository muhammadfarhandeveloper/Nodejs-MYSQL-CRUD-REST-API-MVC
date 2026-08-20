const express = require("express");
const router = express.Router();


const contactController = require("../controllers/contactController");

router.get("/", contactController.getAllContacts);
router.get("/count", contactController.getContactsCount);
router.get("/:id", contactController.getContactById);
router.post("/", contactController.createContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
