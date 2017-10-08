'use strict';

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import index from './routes/index';
import { Container } from 'inversify';
import 'reflect-metadata';
import { interfaces, TYPE, InversifyExpressServer } from 'inversify-express-utils';
import { PostsController } from './Controllers/PostsController';
import TAGS from './constant/tags';
import TYPES from './constant/types';
import { PostsRepository } from './DataAccess/PostsRepository/PostsRepository';

let container = new Container();

container.bind<interfaces.Controller>(TYPE.Controller).to(PostsController).whenTargetNamed(TAGS.PostsController);
container.bind<PostsRepository>(TYPES.PostsRepository).to(PostsRepository);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

export default server.build();