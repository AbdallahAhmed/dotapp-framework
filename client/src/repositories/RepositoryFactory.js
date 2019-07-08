import usersRepository from "./usersRepository";
import groupsRepository from "./groupsRepository";
import permissionsRepository from "./permissionsRepository";
import mediaRepository from "./mediaRepository";
import categoriesRepository from "./categoriesRepository";
import tagsRepository from "./tagsRepository";
import postsRepository from "./postsRepository";
import eventsRepository from "./eventsRepository";
import blocksRepository from "./blocksRepository";
import authorsRepository from "./authorsRepository";

const repositories = {
    users: usersRepository,
    groups: groupsRepository,
    permissions: permissionsRepository,
    media: mediaRepository,
    categories: categoriesRepository,
    tags: tagsRepository,
    posts: postsRepository,
    events: eventsRepository,
    blocks: blocksRepository,
    authors: authorsRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
