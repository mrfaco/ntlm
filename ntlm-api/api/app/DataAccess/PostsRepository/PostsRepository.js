"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
let PostsRepository = class PostsRepository {
    getPosts(desde, hasta) {
        const newUser = {
            'name': 'Pedro',
            'location': 'Villa'
        };
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
};
PostsRepository = __decorate([
    inversify_1.injectable()
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=PostsRepository.js.map