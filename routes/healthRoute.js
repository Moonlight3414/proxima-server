const express = require("express");
const { healthCheck } = require("../controllers/healthController");

//Router
const router = express.Router();

//helth
router.get("/", healthCheck);

module.exports = router;
