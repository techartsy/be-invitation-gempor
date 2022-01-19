const express = require("express");
const giftRoutes = require("./gift");
const adminRoutes = require("./admin");
const guestRoutes = require("./guest");
const messageRoutes = require("./message");
const router = express.Router();

router.use("/gift", giftRoutes);
router.use("/admin", adminRoutes);
router.use("/guest", guestRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
