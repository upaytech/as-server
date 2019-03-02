module.exports = {
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : 'password',
      database : process.env.DB_NAME,
      port: '5432',
    },
    pool: { min: 0, max: 7 },
}
