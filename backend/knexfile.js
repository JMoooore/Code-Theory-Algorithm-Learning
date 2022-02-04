import connection from './db/connection.js';

export default {
    client: 'pg',
    connection: connection.string ?? connection.object,
    migrations: {
        directory: 'db/migrations',
    },
    seeds: {
        directory: 'db/seeds',
    },
};
