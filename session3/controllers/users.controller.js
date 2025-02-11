const { data } = require("../users.json");
const { validGenders } = require("../config.js");
const userSearchSchema = require("../validations/userSearch.validation.js");

const getUsers = (req, res) => {
  res.send(data);
};

const getUserById = (req, res) => {
  const { uuid } = req.params;
  const reqUser = data.find((user) => user.login.uuid === uuid);
  if (!reqUser)
    return res
      .status(404)
      .send({ message: `User with uuid: '${uuid}' could not be found!` });
  res.send(reqUser);
};

const searchUsers = (req, res) => {
  const { gender, age } = req.query;

  const { error } = userSearchSchema.validate({ gender, age });
  if (error)
    return res.status(400).send({ message: error.details[0].message, error });

  // if (gender && !validGenders.includes(gender))
  //   return res
  //     .status(400)
  //     .send({ message: `Gender must be one of: ${validGenders.join(", ")}` });
  // if (
  //   (age && isNaN(age)) ||
  //   !Number.isInteger(Number(age)) ||
  //   parseInt(age) <= 0 ||
  //   parseInt(age) >= 100
  // )
  //   return res
  //     .status(400)
  //     .send({ message: `Age must be an integer between 1 to 99` });

  if (gender && age)
    return res.send(
      data.filter(
        (user) => user.gender === gender && String(user.dob.age) === age
      )
    );
  if (gender) return res.send(data.filter((user) => user.gender === gender));
  if (age) return res.send(data.filter((user) => String(user.dob.age) === age));
  // res
  //   .status(400)
  //   .send({ message: `At least one of 'gender' or 'age' must be sent.` });
};

module.exports = { getUsers, getUserById, searchUsers };
