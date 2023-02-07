const {registerService} = require("../service/UserService");

const saveUserController = async (req, res) => {
    const {firstname, email, password} = req.body;
    const response = await registerService(firstname, email, password);
    res.json({response : response});
}

module.exports = {saveUserController};