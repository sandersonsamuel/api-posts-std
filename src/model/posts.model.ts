import { Post } from '../interfaces';
import { prisma } from "../../prisma/cliente.prisma";

export const getPostsModel = async (page: number, limit: number) : Promise<Post[]> => {

    const skip : number = (page - 1) * limit

     return prisma.posts.findMany({
         take: limit,
         skip: skip
     })
}

export const getPostsByIdModel = async (id: string) : Promise<Post[]> => {
    return prisma.posts.findMany({
        where: {
            id: id
        }
    })
}

export const newPostModel = async ({content: content, username: username} : Post) : Promise<Post> => {
    return prisma.posts.create({
        data: {
            content: content,
            username: username
        }
    })
}