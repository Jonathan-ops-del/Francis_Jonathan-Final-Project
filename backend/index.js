import express from 'express'
import cors from 'cors'
import { readEntries, writeEntries, readUsers, writeUsers,} from './src/util/jsonHandler';
import { v4 as uuidv4 } from 'uuid';
import validateEntries from "./src/middleware/validateEntries";
import validateUser from "./src/middleware/validateUser";
import verifyToken from "./src/middleware/jwtVerify";

const app = express()
const PORT = process.env.PORT || 4001
const { body, validationResult } = require('express-validator');

let jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds=10;
let privateKey="shhhhh"

// allows us to parse json 
app.use(express.json())
app.use(cors())




//Create Entries
app.post("/contact_form/entries", validateEntries, body('name').notEmpty(),body('email').isEmail(),body('phoneNumber').isMobilePhone(),body('content').notEmpty(),(req,res) => {
    let newEntries = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        phoneNumber : req.body.phoneNumber,
        content: req.body.content
}
  const errors = validationResult(req);

      if (!errors.isEmpty()) {
            const invalidProperties = [];
             errors.array().forEach(a => {
              invalidProperties.push(a.param);
  });
          return res.status(400).send({
                 message: 'validation error',
                    invalid: [`${invalidProperties}`],
  });
}

  readEntries().then((entriesJson)=>{
    entriesJson.push(newEntries);
      writeEntries(entriesJson)
       return res.status(201).send( {message:"Successful Entry"})
 }) 

})

//Create Users
app.post("/users", validateUser,body('name').notEmpty(),body('password').isLength({ min: 8 }),body('email').isEmail(),(req,res) =>{
  let newUser = {
      id: uuidv4(),
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
}

  const errors = validationResult(req);

    if(!errors.isEmpty()){
      const missingValues = [];
          errors.array().forEach(a=>{
                missingValues.push(a.param)
          })
            return res.status(400).send({
              message: 'validation error',
                 invalid: [`${missingValues}`],
});
}   
bcrypt.hash(newUser.password, saltRounds, function (err, hash) { 
newUser.password = hash;
      readUsers().then((usersJson)=>{
         usersJson.push(newUser)
         writeUsers(usersJson);

         newUser={
          id: uuidv4(),
          name: req.body.name,
          email: req.body.email
         }

          return res.status(201).send({message:"Successful Entry"})
  })

})
})



///Registered User gets Token   
app.post('/auth', (req, res) => {
  let registeredUser = {
    email: req.body.email,
    password: req.body.password,
};


readUsers().then(usersJson => {
  let user = usersJson.find(u => u.email === registeredUser.email);
      if (!user) {
          return res.status(401).send({
              message: 'incorrect credentials provided',
    });
  }

  const hash = user.password;
      bcrypt.compare(registeredUser.password, hash, function(err, result) {
         if (result) {
          const token = jwt.sign(registeredUser, privateKey)
                return res.status(201).send(token);
    }
   
          return res.status(401).send({
              message: 'incorrect credentials provided',
    });
  });
});
});



//Registered User with Token gets access to Entire Entries Array
app.get("/contact_form/entries", verifyToken, (req,res) => {
  readEntries().then((entriesJson) => {
    return res.status(200).send(entriesJson);
})
})


app.listen(`${process.env.PORT}`, () => console.log("Express server is running"))
