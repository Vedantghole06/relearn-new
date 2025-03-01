import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Signup Controller
export const signup = async (req, res) => {
    try {
        const { name, username, email, country, sector, organization, updates, policies, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            username,
            email,
            country,
            sector,
            organization,
            updates,
            policies,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
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