import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async(req,res,next)=>{
    try{
        const userByUsername = await User.findOne({ username: req.body.username });
        const userByEmail = await User.findOne({ email: req.body.email });

        if (userByUsername) {
            return next(createError(409, "User with the same username already exists."));
        }

        if (userByEmail) {
            return next(createError(409, "User with the same email already exists."));
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });

        await newUser.save()
        res.status(200).send("User has been created.")
    }catch(err){
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try{
        const user =await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"User not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createError(400,"Wrong password or username!"));

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin },process.env.JWT);

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
        })
        .status(200)
        .json({details:{...otherDetails},isAdmin});
    }catch(err){
        next(err)
    }
}

// export const logout = (req, res, next) => {
//     try {
//         // Clear the access token from the cookie
//         res.clearCookie("access_token");
//         console.log("Cookie cleared!");

//         // Optionally, perform any other necessary logout-related actions
//         // ...

//         res.status(200).send("Logged out successfully.");
//     } catch (err) {
//         console.error("Error clearing cookie:", err);
//         next(err);
//     }
// };
