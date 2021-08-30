import { Usuario } from "./Usuario"

export class Postagem {
    public id: number
    public data: Date
    public tema: string
    public texto: string
    public titulo: string
    public usuario: Usuario
}