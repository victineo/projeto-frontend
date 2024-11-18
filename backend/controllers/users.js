const registerUser = async (req, res) => {
    const { username, name, email, password } = req.body;

    try {
        const newUser = await usersModel.addUser({
            username,
            name,
            email,
            password
        });
        res.status(201).json({
            message: "Usuario criado com sucesso", 
            user: newUser
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { username } = req.params;

    try {
        await usersModel.deleteUser(username);
        res.status(200).json({
            message: "Usuario deletado com sucesso", 
            username: username
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
    deleteUser
};
