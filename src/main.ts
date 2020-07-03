import { User } from './db/models';

User.findAll().then((users) => {
  console.log(users.map((u) => u.toJSON()));
});

