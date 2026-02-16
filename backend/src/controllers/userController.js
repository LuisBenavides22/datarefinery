import { request, response } from "express"
import prisma from '../config/prisma'


export class UserController {

    // Function to create user
    async createUser(req, res){

        try {

            const { name, email } = req.body;

            if (!name || !email){
                return res.status(400).json({error: "missing fields"});
            }

            // Check to see if user already exists
            const existingUser = await prisma.user.findUnique({
                where : { email }
            });

            if (existingUser){
                return res.status(409).json({error : "user already exists!"});
            }

            // Creates new user
            const newUser = await prisma.user.create({
                data : { name, email},

                select : { name:true, email:true }
            });

        
            res.status(201).json(newUser);

        } catch(error){
            console.error("failed to create user", error);
            res.status(400).json({error : "error creating new user"});
        }
    }

    // Function to fetch all users
    async getAllUsers(req, res){

        try {

            // Fetches all users
            const users = await prisma.user.findMany({
                select : { name:true, email:true }
            });

            res.status(200).json(users);


        } catch(error) {
            console.error("failed to fetch users", error);
            res.status(500).json({error : "could not fetch users"});
        }
    }

    // Function to update users
    async updateUser(req, res){

        try {

            const { id } = req.params;
            const { name, email} = req.body;

            // Checks to see if user is in DB
            const existingUser = await prisma.user.findUnique({
                where : { id }
            });

            if (!existingUser) {
                return res.status(404).json({error: "user does not exist"});
            }

            if (!name && !email){
                return res.status(400).json({error: "no data provided to update"});
            }

            // Updates users
            const updatedUser = await prisma.user.update({
                where : { id },
                data : {
                    name: name ?? existingUser.name,
                    email: email ?? existingUser.email
                },

                select : { name: true, email: true}
            });

            res.status(200).json(updatedUser);

        } catch(error) {
            console.error('failed to update user', error);
            res.status(500).json({error : "failed to update user"});
        }
    }

    // Function to delete users
    async deleteUser(req, res){

        try {

            const { id } = req.params;
            const { name, email } = req.body;

            // Check to see if user exists
            const existingUser = await prisma.user.findUnique({
                where : { id }
            });

            if (!existingUser){
                return res.status(404).json({error: "user does not exist"});
            }

            // Deletes user from DB
            const deletedUser = await prisma.user.delete({
                where : { id }
            });

            console.log(`Deleted User : ${deletedUser}`);

            res.status(200).json({message : "user successfully deleted"});

        } catch(error) {
            console.error("failed to delete user", error);
            res.status(500).json({error: "user failed to delete"});
        }
    }
}