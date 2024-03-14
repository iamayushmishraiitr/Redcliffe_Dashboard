import jwt  from "jsonwebtoken"
const SecretKey = "Secret-key";
const generateToken = (email, password) => {
  const token = jwt.sign(
    {
      email: email,
      password: password,
    },
    SecretKey,
    { expiresIn: 300 }
  );
  return token;
};

export default generateToken