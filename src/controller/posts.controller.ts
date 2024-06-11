import {Request, Response} from "express";
import {getPostsByIdModel, getPostsModel, newPostModel} from "../model/posts.model";
import {Post} from "../interfaces";

export const getPosts = async (req: Request, res: Response) : Promise<void> => {
    const page = req.query.page || 1
    const limit = req.query.limit || 10

    const posts : Post[] = await getPostsModel(Number(page), Number(limit))
    res.status(200).json(posts)
}

export const getPostsById = async (req: Request, res: Response) : Promise<void> => {
    const id : string = req.params.id
    const post : Post[] = await getPostsByIdModel(id)
    res.status(200).json(post)
}

export const newPost = async (req: Request, res:Response) : Promise<void> => {
    const post : Post = await newPostModel(req.body)
    res.status(201).json(post)
}


