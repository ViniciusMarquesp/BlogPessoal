import { Postagem } from "./PostagemModel"

export class Tema {
    public id: number
    public descricao: string
    public postagem: Postagem[]
}