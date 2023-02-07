const {Router} = require("express");
const router = Router();
const {saveUserController} = require ("../controller/UserController");

router.post("/usuarios", saveUserController);

module.exports = router;