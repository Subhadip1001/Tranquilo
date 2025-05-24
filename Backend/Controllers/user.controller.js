import User from "../Models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullname, age, email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      fullname,
      age,
      email,
      password: hashedPassword,
    });
    await createUser.save();
    return res.status(201).json({ message: "User created successfully",
        user: {
            id: createUser._id,
            fullname: createUser.fullname,
            age: createUser.age,
            email: createUser.email,
        },
     });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if (!findUser || !isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    return res.status(200).json({ 
      message: "Login successful",
      user: {
        id: findUser._id,
        fullname: findUser.fullname,
        email: findUser.email,
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
