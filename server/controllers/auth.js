import { AggregationCursor } from "mongoose";
import User from "../models/user";
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from "../utils/auth";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //Validation
    if (!name) return res.status(400).send("Name is require");
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    //hash passsword
    const hashedPassword = await hashPassword(password);

    //register
    const user = new User({
        name, 
        email,
        password: hashedPassword,
    });
    await user.save();
    console.log("Saved user", user);
    return res.json({ ok : true})
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error, Try again.");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password} = req.body
    //check if our db has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send("No user found");
    //Check password
    const match = await comparePassword(password, user.password);
    //create signed jwt
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //return user and token to client, exclude hashed password
    user.password = undefined;
    //send token in cookie
    res.cookie("token", token, {
      httpOnly: true
      //secure: true //only works on https
    });
    // send user as json response
    res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(400).send("Erro, Try again.")
  }
};

export const logout = async(req, res) => {
  try {
    res.clearCookie("token");
    return res.json({message : "Signout success"});
  } catch (errr) {
    console.log(err)
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password").exec();
    console.log("CURRENT_USER", user);
    return res.json({ ok : true});
  } catch (err) {
    console.log(err)
  }
};

export const sendTestEmail = async (req, res) => {
  console.log("Send email is using ses")
  res.json({ok : true})
};
