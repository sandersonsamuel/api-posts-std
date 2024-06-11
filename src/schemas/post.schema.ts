import z from 'zod'

export const postSchema = z.object({
    content: z.string({
        required_error: 'Conteúdo é obrigatório',
        invalid_type_error: 'Conteúdo tem que ser uma string',
    }),
    username: z.string({
        required_error: 'Nome de usuário é obrigatório',
        invalid_type_error: 'Nome de usuário tem que ser uma string',
    }),
})