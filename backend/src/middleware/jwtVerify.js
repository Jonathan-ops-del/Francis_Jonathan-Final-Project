import jwt from "jsonwebtoken";
let privateKey="shhhhh"


export default (req, res, next) => {
    console.log("VERIFY TOKEN MIDDLEWARE")
  const authHeader = req.headers["authorization"];
  console.log(req.headers)
  console.log(req.headers["authorization"]);
  console.log(authHeader)
  // Value of the authorization header is typically: "Bearer JWT", hence splitting with empty space and getting second part of the split
  const token = authHeader && authHeader.split(" ")[1];

  console.log("TOKEN = ", token)
  if (token == null) {
    console.log("TOKEN IS NULL")
    return res.status(403).send({ message: "token not provided" });
  }
  try {
    console.log("VERIFYING TOKEN WITH KEY",privateKey)
    const data = jwt.verify(token, privateKey);
    console.log("TOKEN IS VERIFIED")
    req.user = data;
    next();
  } catch (err) {
    console.log("ERROR VERIFYING TOKEN")
    console.error(err);
    return res.status(401).send({ message: err.message });
  }
};