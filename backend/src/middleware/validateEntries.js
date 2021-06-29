
//MiddleWare to Validate Entries//
let validateEntries = (req,res, next) => {
    let errorsEntries = []
    let requiredProperties = ["name", "email", "phoneNumber", "content" ]
         requiredProperties.forEach(property => {
            if(!req.body.hasOwnProperty(property)) {
                errorsEntries.push(property)
        }
     })
        if (errorsEntries.length === 0){
            next();
    }
         if (errorsEntries.length>0) {
            return res.status(400).send({
                message: "validation error",
                invalid: [`${errorsEntries}`]
            } 
         )
    }
}

export default validateEntries;