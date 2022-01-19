const express = require("express");
const router = express.Router();
const { getAllMessage } = require("../controllers/message");

router.get("/", getAllMessage);

module.exports = router;
