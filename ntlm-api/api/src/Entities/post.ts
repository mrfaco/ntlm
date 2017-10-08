import { User } from "./user";

export interface Post {
    fecha: string,
    desde: string,
    hacia: string,
    postedBy: User
}