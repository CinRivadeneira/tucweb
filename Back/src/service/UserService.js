const User = require("../model/user");
const crypto = require("crypto");

const RegisterService = async (firstname, email, password) => {
    try{
        const id = crypto.randomUUID();
        await User.create({
            id,
            firstname,
            email,
            password
        });
        return id;
    }catch(error){
        return error;
    }
}

module.exports = {RegisterService}