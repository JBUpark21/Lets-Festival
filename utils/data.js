import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'john0@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },

    {
      name: 'Kim',
      email: 'kim@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    
  ],
};

export default data;