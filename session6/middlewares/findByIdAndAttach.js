const findByIdAndAttach = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const reqResource = await Model.findById(id);
    if (!reqResource) return res.sendStatus(404);
    req.resource = reqResource;
    next();
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId")
      return res.status(400).send({ message: "Invalid Id!" });
    console.log(error);
    res
      .status(500)
      .send({ message: "Something went wrong... Please try again!" });
  }
};

module.exports = findByIdAndAttach;
