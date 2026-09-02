import "reflect-metadata";

import { NestFactory } from "@nestjs/core";

import { parseServerEnv } from "@bemara/config";

import { AppModule } from "./app.module";

async function bootstrap() {
  const env = parseServerEnv(process.env);
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: true,
  });

  await app.listen(env.PORT);
}

void bootstrap();
