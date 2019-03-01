module.exports = {
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'upay',
      password : 'password',
      database : 'apnasamaan',
      port: '15432',
    },
    pool: { min: 0, max: 7 },
}
