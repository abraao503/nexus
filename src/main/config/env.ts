export default {
  postgresUrl:
    process.env.POSTGRES_URL ||
    "postgres://postgres:postgres@localhost:5432/postgres",
  port: process.env.PORT || 3333,
};
