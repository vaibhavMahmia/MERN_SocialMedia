import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;

    decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.log(error);
    console.log("Authorization Not Found...".red);
  }
};

export default auth;
