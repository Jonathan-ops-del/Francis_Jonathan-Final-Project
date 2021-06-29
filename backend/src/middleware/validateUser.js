
//MiddleWare to Validate Users
let validateUser = (req,res, next) => {
    let errorsUser = []
    let requiredProperties = ["name", "password", "email" ]
         requiredProperties.forEach(property => {
            if(!req.body.hasOwnProperty(property)) {
                errorsUser.push(property)
        }
     })
        if (errorsUser.length === 0){
            next();
    }
         if (errorsUser.length>0) {
            return res.status(400).send({
                message: "validation error",
                invalid: [`${errorsUser}`]
            }
         )
    }
}

export default validateUser;