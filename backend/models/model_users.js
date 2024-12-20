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
    console.log("Caminho do arquivo de usuários:", dataPath);
    ensureDirectoryExistence(dataPath);

    if (!fs.existsSync(dataPath)) {
      console.log("Arquivo não encontrado, criando um novo.");
      fs.writeFileSync(dataPath, "[]");
    }

    const data = fs.readFileSync(dataPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log("Erro ao carregar os usuários:", err);
    return [];
  }
};

const saveUsers = (users) => {
  ensureDirectoryExistence(dataPath);
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
};

const generateUserId = (users) => {
  const sortedUsers = [...users].sort((a, b) => a.id - b.id);
  const id = sortedUsers.length > 0 ? users[users.length - 1].id + 1 : 1;
  return id;
};

const addUser = async (user) => {
  const users = loadUsers();
  const userExists = users.find((u) => u.username === user.username);
  if (userExists) throw new Error("Usuario já cadastrado");

  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = {
    id: generateUserId(users),
    username: user.username,
    name: user.name,
    email: user.email,
    password: hashedPassword,
    tasks: []
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

const authenticateUser = (email, password) => {
  const users = loadUsers();
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("Usuário não encontrado");

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) throw new Error("Senha inválida");

  return { user: { email: user.email, nome: user.username } };
};

module.exports = {
  loadUsers,
  saveUsers,
  addUser,
  deleteUser,
  authenticateUser
};
