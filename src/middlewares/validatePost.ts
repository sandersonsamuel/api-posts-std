import {NextFunction, Response, Request} from "express";
import {postSchema} from "../schemas/post.schema";

export const validatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        postSchema.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({error: error})
    }
}