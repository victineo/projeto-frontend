const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const dataPath = path.join(__dirname, "../data/users.json");

const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

const loadUsers = () => {
  try {
    ensureDirectoryExistence(dataPath);

    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, "[]");
    }

    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const saveUsers = (users) => {
  ensureDirectoryExistence(dataPath); 
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
};

const addUser = (user) => {
  const users = loadUsers();

  const userExists = users.find((u) => u.username === user.username);
  if (userExists) throw new Error("Usuario já cadastrado");

  const hashedPassword = bcrypt.hashSync(user.password, 10);
  
  const newUser = {
    username: user.username,
    nome: user.nome,
    email: user.email,
    password: hashedPassword
  };

  users.push(newUser);
  saveUsers(users);

  return newUser;
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
