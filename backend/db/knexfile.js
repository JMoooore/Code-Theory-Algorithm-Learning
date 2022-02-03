import dotenv from 'dotenv'
dotenv.config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


export default {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      port: 5432
    },
    migrations: {
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    }
};
