import User from '../models/user.models.js';
import jwt from 'jsonwebtoken';

// Signup Controller
export const signup = async (req, res) => {
    try {
        const { name, username, email, country, sector, organization, updates, policies, password } = req.body;

        // Check if email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or Username already exists' });
        }

        // Create new user
        const newUser = new User({ name, username, email, country, sector, organization, updates, policies, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Login Controller
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by email
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });

    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
    }
};

// Get One User by ID
export const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

// Delete User Profile
export const deleteProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user profile', error: error.message });
    }
};

// Update User Profile
export const updateProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User profile updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error: error.message });
    }
};
// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};