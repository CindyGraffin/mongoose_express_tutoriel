import { Request, Response } from "express";
import {User} from '../models/User'

class UserController {
    public async findAll(req: Request, res: Response) {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
        }
    }

    public async createOne(req: Request, res: Response) {
        try {
            const newUser = new User(req.body)
            await newUser.save()
            res.status(200).json(newUser)
        } catch (error) {
            console.log(error);
        }
    }

    public async updateOne(req: Request, res: Response) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updatedUser)
        } catch (error) {
            console.log(error);
        }
    }

    public async replaceOne(req: Request, res: Response) {
        try {
            const replacedUser = await User.findOneAndReplace({"_id": req.params.id}, req.body, {new: true})
            res.status(200).json(replacedUser)
        } catch (error) {
            console.log(error);
        }
    }

    public async deleteOne(req: Request, res: Response) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id)
            res.status(200).json(deletedUser)
        } catch (error) {
            console.log(error);
        }
    }
}

export const userController = Object.freeze(new UserController());
