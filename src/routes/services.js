const express = require("express");
const controller = require("../controllers/servicesController");
const router = express.Router();

const servicesController = require("../controllers/servicesController");

// HANDLES ALL REQUEST ROUTES

// get all route
router.get("/", servicesController.list);
// post route
router.post("/add", servicesController.save);
// delete route
router.get("/delete/:id", servicesController.delete);
// update routes
router.get("/update/:id", servicesController.edit);
router.post("/update/:id", servicesController.update);

module.exports = router;