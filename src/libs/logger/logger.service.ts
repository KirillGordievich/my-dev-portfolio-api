import { ConsoleLogger } from '@nestjs/common';
import winston from 'winston';
import { configure as safeStringify } from 'safe-stable-stringify';

const stringify = safeStringify({ deterministic: false });

function logSafeStringify(value: unknown): string {
  if (value instanceof Error) {
    return value.stack ?? value.message;
  }
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return String(value);

  try {
    return JSON.stringify(value) ?? '[unserializable]';
  } catch {
    return stringify(value) ?? '[unserializable]';
  }
}

function createWinstonLogger(): winston.Logger {
  return winston.createLogger({
    level: process.env.LOG_LEVEL ?? 'info',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(({ timestamp, level, message, context }) => {
        return `${timestamp} [${context ?? 'App'}] ${level}: ${message}`;
      }),
    ),
    transports: [new winston.transports.Console()],
  });
}

let winstonLogger: winston.Logger | null = null;

export class Logger extends ConsoleLogger {
  private readonly winston: winston.Logger;

  constructor(context: string) {
    super(context);
    if (!winstonLogger) {
      winstonLogger = createWinstonLogger();
    }
    this.winston = winstonLogger;
  }

  override log(message: unknown, ...args: unknown[]) {
    const msg = logSafeStringify(message);
    this.winston.info(msg, { context: this.context });
    super.log(msg, ...args);
  }

  override error(message: unknown, ...args: unknown[]) {
    const msg = logSafeStringify(message);
    this.winston.error(msg, { context: this.context });
    super.error(msg, ...args);
  }

  override warn(message: unknown, ...args: unknown[]) {
    const msg = logSafeStringify(message);
    this.winston.warn(msg, { context: this.context });
    super.warn(msg, ...args);
  }

  override debug(message: unknown, ...args: unknown[]) {
    const msg = logSafeStringify(message);
    this.winston.debug(msg, { context: this.context });
    super.debug(msg, ...args);
  }

  override verbose(message: unknown, ...args: unknown[]) {
    const msg = logSafeStringify(message);
    this.winston.verbose(msg, { context: this.context });
    super.verbose(msg, ...args);
  }
}
