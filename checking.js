module.exports = check = (req, res, next) => {
  console.log("middleware");

  let { name, number, email, password } = req.body;
  console.log(name, number, password, email);

  if (name && number && email && password) {
    next();
  }
  else{
   res.send("enter a valid details");
  }
};
