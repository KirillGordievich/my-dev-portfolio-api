import { PrismaClient, SkillLevel, SocialPlatform } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.profile.findFirst();
  if (existing) {
    console.log(`Skipping seeding, profile already exists`);
    return;
  }

  const profile = await prisma.profile.create({
    data: {
      name: 'Гордиевич Кирилл Александрович',
      title: 'Backend-разработчик',
      email: 'kirill.gordievich777@gmail.com',
      description: [
        'Backend-разработчик с 6+ годами опыта, в основном в крипто финтехе.',
        'Пишу на TypeScript (NestJS) и Python (FastAPI), немного на Go.',
        'По образованию магистр прикладной математики, закончил матмех СПбГУ.',
        'Домашняя ОС Arch Linux уже 6 лет, пишу свои торговые боты, занимаюсь бектестингом торговых стратегий, интересуюсь внедрением ИИ в рутинные процессы.',
      ].join(' '),

      socialLinks: {
        create: [
          { platform: SocialPlatform.Telegram, url: 'https://t.me/KGordievich' },
          { platform: SocialPlatform.Email, url: 'mailto:kirill.gordievich777@gmail.com' },
          { platform: SocialPlatform.Github, url: 'https://github.com/KGordievich' },
        ],
      },

      skills: {
        create: [
          { name: 'TypeScript', level: SkillLevel.Advanced },
          { name: 'Node.js', level: SkillLevel.Advanced },
          { name: 'NestJS', level: SkillLevel.Advanced },
          { name: 'Python', level: SkillLevel.Advanced },
          { name: 'FastAPI', level: SkillLevel.Advanced },
          { name: 'PostgreSQL', level: SkillLevel.Advanced },
          { name: 'Redis', level: SkillLevel.Advanced },
          { name: 'Docker', level: SkillLevel.Advanced },
          { name: 'Web3', level: SkillLevel.Advanced },
          { name: 'Git', level: SkillLevel.Advanced },
          { name: 'Prisma', level: SkillLevel.Advanced },
          { name: 'SQLAlchemy', level: SkillLevel.Advanced },

          { name: 'CI/CD', level: SkillLevel.Intermediate },
          { name: 'RabbitMQ', level: SkillLevel.Intermediate },
          { name: 'Celery', level: SkillLevel.Intermediate },
          { name: 'Nginx', level: SkillLevel.Intermediate },
          { name: 'ElasticSearch', level: SkillLevel.Intermediate },
          { name: 'GraphQL', level: SkillLevel.Intermediate },
          { name: 'ClickHouse', level: SkillLevel.Intermediate },
          { name: 'Grafana', level: SkillLevel.Intermediate },
          { name: 'Minio', level: SkillLevel.Intermediate },

          { name: 'Go', level: SkillLevel.Beginner },
          { name: 'Rust', level: SkillLevel.Beginner },
          { name: 'Kubernetes', level: SkillLevel.Beginner },
        ],
      },

      projects: {
        create: [
          { name: 'Uniswap v3 swap executor', url: 'https://github.com/KirillGordievich/uniswap-v3-executor' },
          { name: 'Polymarket Claimer', url: 'https://github.com/KirillGordievich/polymarket-claimer' },
          {
            name: 'CLI tool for automated Polymarket account creation and setup',
            url: 'https://github.com/KirillGordievich/polymarket-account-manager',
          },
          {
            name: 'plpgSQL Scheme with many useful functions',
            url: 'https://github.com/KirillGordievich/plpgsql-common-scheme',
          },
        ],
      },

      experience: {
        create: [
          {
            company: 'Switchcase',
            position: 'Backend-разработчик',
            startDate: new Date('2025-04-01'),
            endDate: new Date('2026-07-01'),
            description:
              'Платформа (CRM) для токенизации недвижимости. Участвовал в разработке сервиса с нуля, довёл продукт до прода и первых продаж.',
            achievements: [
              'Разработал многоканальную систему нотификаций (email, push, SMS, Telegram) с трекингом доставки (~30k уведомлений/месяц)',
              'Реализовал Four Eyes Approval System для критических действий',
              'Спроектировал систему разрешений с 5 ролями и 70+ permissions для 200+ эндпоинтов',
              'Интегрировал KYC (Sumsub), 2FA, passwordless auth и Web3 авторизацию',
              'Подключил платёжные системы: Web3, Transak, Stripe',
              'Создал ИИ агента для выжимок созвонов и автоматизации таск-менеджмента',
            ],
          },
          {
            company: 'Swaps.io',
            position: 'Backend-разработчик',
            startDate: new Date('2024-04-01'),
            endDate: new Date('2025-04-01'),
            description: 'DEX-обменник. Участвовал в разработке сервиса с нуля, довёл до прода и первых обменов.',
            achievements: [
              'Реализовал систему обменов, хранение истории и индексацию блокчейна',
              'Разработал систему наград за задания с админ панелью',
              'Создал internal SDK с HTTP клиентами для внутренних сервисов',
              'Уменьшил количество запросов фронта с 20 до 5 на главной странице',
              'Создал ИИ агента, отвечающего на 90% вопросов в поддержку',
              'Создал ИИ агента, переводящего пользовательские текстовые запросы в запрос обмена',
            ],
          },
          {
            company: '1to team',
            position: 'Backend-разработчик',
            startDate: new Date('2023-11-01'),
            endDate: new Date('2024-04-01'),
            description:
              'Стартап в Aleo блокчейне. Разработка майнинг пула, ботофермы для аирдроп хантинга, крипто кошелька и SDK.',
            achievements: [
              'Разработал SDK для Aleo блокчейна',
              'Создал CLI tools для майнеров',
              'Реализовал бекенд часть майнинг пула для блокчейна Aleo',
              'С нуля написал бото ферму для фарма аирдропов в Scroll блокчейне, управляющую более 1000 аккаунтами и успешно обходящую анти бот проверки',
              'Реализовал удалённый крипто кошелёк для браузера',
            ],
          },
          {
            company: 'Evercode Lab',
            position: 'Backend-разработчик',
            startDate: new Date('2020-09-01'),
            endDate: new Date('2023-11-01'),
            description:
              'Большая IT компания, занималась консалтингом и аутсорсом. Я занимался разработкой и поддержкой бэкенда для высоконагруженных систем в финтехе и крипто.',
            achievements: [
              'Вывел в прод несколько продуктов с нуля',
              'Создал сервис сбора исторических данных цен крипто активов',
              'Ускорил среднее время обменов с 30 секунд до 2',
              'Создал маркет мейкер сервис с ценообразованием по принципу Uniswap v2',
              'Интегрировал 10+ бирж: Binance, FTX, Poloniex, Uniswap, SushiSwap',
              'Разработал сервис делегирования энергии в Tron (~15k USD экономии/месяц)',
              'Настроил мониторинг всех сервисов (Grafana/Prometheus)',
              'Написал PL/pgSQL библиотеку с полезными функциями для внутреннего использования',
            ],
          },
        ],
      },
    },
  });

  console.log(`Seeded profile: ${profile.name} (${profile.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
