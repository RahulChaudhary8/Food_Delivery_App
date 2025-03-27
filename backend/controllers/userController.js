import userModel from '../models/userModel.js';
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
import validator from "validator"





//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User Does'nt exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.status(200).json({ success: true, token });

    } catch (error) {
        console.log("Login Error:", error);
        res.status(500).json({ success: false, message: "Error" });

    }
};



// Create JWT Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || "defaultSecret", {
        expiresIn: "7d",
    });
};

//register user

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        //checking is user already exist
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(400).json({ success: false, message: "User already exist" });
        }

        //validating email formate
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" })
        }

        //Validate strong password
        if (!password.isStrongPassword(password, { minLength: 8, minNumbers: 1, minUppercase: 1 })) {
            return res.status(400).json({success: false, message:
                "Password must be at least 8 characters long, contain a number, and an uppercase letter.",
            });
        }

        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // // Create new user
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        });

        const user = await newUser.save()
        const token = createToken(user._id)
        res.status(201).json({ success: true, token });


    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export { loginUser, registerUser };