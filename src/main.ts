import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { createRequestHandler } from '@react-router/express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appContext = app.get(AppModule);

  // app.use(
  //   '/ui',
  //   createRequestHandler({
  //     getLoadContext: (req, res) => ({
  //       req,
  //       res,
  //       context: appContext,
  //     }),
  //     build: build,
  //   }),
  // );

  await app.listen(process.env.PORT ?? 6969);
}
bootstrap();
