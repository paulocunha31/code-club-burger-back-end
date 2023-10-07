module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburger',
  // Define a hora e data automáticos e configura _ ex: cosnt my_app ,e configra caixa baixa
  define: {
    timespamps: true,
    underscored: true,
    undescoredAll: true,
  },
}
