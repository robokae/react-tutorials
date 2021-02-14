import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export default {
    entities: [Post],
    dbName: "reddit_clone",
    type: "postgresql",
    debug: !__prod__,
} as const;
