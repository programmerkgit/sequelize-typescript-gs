/*
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
*/


import { User } from './db/models';

User.findAll().then((users) => {
  console.log(users.map((u) => u.toJSON()));
});

