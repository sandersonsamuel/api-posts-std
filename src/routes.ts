import express, {Router} from "express";
import {Request, Response} from "express";
import {getPosts, getPostsById, newPost} from "./controller/posts.controller";
import {validatePost} from "./middlewares/validatePost";

const router:Router = express.Router()

router.get('/', (req:Request, res:Response) => {
    res.send('Api rodando')
})

router.get('/posts/pagination', getPosts)

router.post('/post', validatePost, newPost)

router.get('/post/:id', getPostsById)

export default router