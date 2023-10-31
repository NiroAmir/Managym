



const joi = require("joi") ;



const schema = joi.object({

title: joi.string().min(2).max(7),

subtitle :joi.string(),


phone :joi.string().ruleset.regex(/^[0-9]{3}[-.\\s]?[0-9]{3}[-.\\s]?[0-9]{4}$/).rule({message:"The phone number you entered is incorrect"}).required()

});









const newValidateObject = {

    title:"oo",

    subtitle:"heyhey",
    phone:"0587000000",
}







const {error} = schema.validate(newValidateObject);

console.log(error?.message);