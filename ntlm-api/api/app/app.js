'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const inversify_1 = require("inversify");
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const PostsController_1 = require("./Controllers/PostsController");
const tags_1 = require("./constant/tags");
const types_1 = require("./constant/types");
const PostsRepository_1 = require("./DataAccess/PostsRepository/PostsRepository");
let container = new inversify_1.Container();
container.bind(inversify_express_utils_1.TYPE.Controller).to(PostsController_1.PostsController).whenTargetNamed(tags_1.default.PostsController);
container.bind(types_1.default.PostsRepository).to(PostsRepository_1.PostsRepository);
let server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
exports.default = server.build();
//# sourceMappingURL=app.js.map