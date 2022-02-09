import connection from "./db/connection.js";

export default {
  client: "pg",
  connection: connection.object ?? connection.string,
  migrations: {
    directory: "db/migrations",
  },
  seeds: {
    directory: "db/seeds",
  },
};
