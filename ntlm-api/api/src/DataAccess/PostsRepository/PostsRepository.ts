import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Post } from "../../Entities/post";
import { User } from "../../Entities/user";
import { iPostsRepository } from "./iPostsRepository";

@injectable()
export class PostsRepository implements iPostsRepository {

    getPosts(desde: string, hasta : string) : Post[] {
        const newUser = {
            'name': 'Pedro',
            'location': 'Villa'
          }as User;
        return [{
            'desde': 'un lugar',
            'hacia': 'otro lugar',
            'fecha': '2017-01-20T00:00:00',
            'postedBy': newUser
          },
          {
              'desde': 'un lugar',
              'hacia': 'otro lugar',
              'fecha': '2017-01-21T00:00:00',
              'postedBy': newUser
            }];
    }
}