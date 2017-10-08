import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { iPostsRepository } from "../DataAccess/PostsRepository/iPostsRepository";
import { Post } from "../Entities/post";
import { PostsRepository } from "../DataAccess/PostsRepository/PostsRepository";
import TYPES from '../constant/types'

@injectable()
@controller('/posts')
export class PostsController {

    constructor(@inject(TYPES.PostsRepository) private postsRepository: PostsRepository) {
        this.postsRepository = postsRepository;
    }

    @httpGet('/')
    public getPosts(): Post[] {
        return this.postsRepository.getPosts('hola', 'chau');
    }
}