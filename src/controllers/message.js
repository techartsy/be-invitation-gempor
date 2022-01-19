const { Guest } = require("../../models");
const exclude = ["createdAt", "updatedAt", "pax", "address", "attend"];

// get all messages
exports.getAllMessage = async (req, res) => {
  try {
    const guest = await Guest.findAll({
      attributes: {
        exclude: exclude,
      },
      order: [["id", "DESC"]],
    });

    const filteredUser = guest.filter((person) => {
      return person.message.length > 0;
    });

    res.status(200).send({
      status: "Success",
      message: "Message Successfully Get",
      data: {
        message: filteredUser,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
};
