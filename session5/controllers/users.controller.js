const { data } = require("../users.json");

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

  if (gender && age)
    return res.send(
      data.filter(
        (user) => user.gender === gender && String(user.dob.age) === age
      )
    );
  if (gender) return res.send(data.filter((user) => user.gender === gender));
  if (age) return res.send(data.filter((user) => String(user.dob.age) === age));
};

module.exports = { getUsers, getUserById, searchUsers };
