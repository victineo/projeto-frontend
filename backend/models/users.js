const fs = require("fs");
const path = require("path");
const brcypt = require("bcrypt");

const dataPath = path.join(__dirname, "../data/users.json");

const loadUsers = () => {
  try {
    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
};

const addUser = (user) => {
  const users = loadUsers();

  const userExists = users.find((u) => u.username === user.username);
  if (userExists) throw new Error("Usuario já cadastrado");

  const hashedPassword = brcypt.hashSync(user.password, 10);
  
  const newUser = {
    username: user.username,
    nome: user.nome,
    email: user.email,
    password: hashedPassword
  };

  users.push(user);
  saveUsers(users);

  return user;
};

const deleteUser = (username) => {
    let users = loadUsers();
    users = users.filter((user) => user.username !== username);
    saveUsers(users);   
};

module.exports = {
  loadUsers,
  saveUsers,
  addUser,
  deleteUser,
};
