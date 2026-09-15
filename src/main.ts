import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Logger } from './libs/logger/index.js';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, { logger });

  app.enableShutdownHooks();

  const host = process.env.HOST ?? '0.0.0.0';
  const port = process.env.PORT ?? 3000;
  await app.listen(port, host);
  logger.log(`GraphQL API running on http://${host}:${port}/graphql`);

  // process.on('unhandledRejection', (reason) => {
  //   const message =
  //     reason instanceof Error
  //       ? (reason.stack ?? reason.message)
  //       : String(reason);
  //   logger.error(`Unhandled promise rejection: ${message}`);
  // });

  // process.on('uncaughtException', (error) => {
  //   logger.error(`Uncaught exception: ${error.stack ?? error.message}`);
  // });
}

await bootstrap();
