import User from "./User";

export default interface Post {
    id?: number; 
    userId?: number;
    titulo?: string;
    text?: string;
    user?: User
}