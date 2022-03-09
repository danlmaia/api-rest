const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'luiz',
          email: 'luiz@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'luiz 2',
          email: 'luiz2@gmail.com',
          password_hash: await bcryptjs.hash('654564', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'luiz 3',
          email: 'luiz3@gmail.com',
          password_hash: await bcryptjs.hash('987123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down: () => {},
};
