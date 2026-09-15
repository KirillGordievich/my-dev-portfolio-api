import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';
import { DatabaseModule } from './database/database.module.js';
import { ProfileModule } from './app/profile/profile.module.js';
import { SkillModule } from './app/skill/skill.module.js';
import { ExperienceModule } from './app/experience/experience.module.js';
import { ProjectModule } from './app/project/project.module.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      introspection: true,
    }),
    DatabaseModule,
    ProfileModule,
    SkillModule,
    ExperienceModule,
    ProjectModule,
  ],
})
export class AppModule {}
