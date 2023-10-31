

const bcrypt = require("bcryptjs");





const generatePassword =  (password)=>bcrypt.hashSync(password,10);





const comparePassword = (password,oldPassword)=>{

    return bcrypt.compareSync(password,oldPassword);

}




module.exports ={generatePassword,comparePassword};