import { Post } from "../../Entities/post";

export interface iPostsRepository {
  getPosts(desde: string, hasta : string) : Post[];
}