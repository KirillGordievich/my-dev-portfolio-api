import { Module } from '@nestjs/common';
import { SkillResolver } from './skill.resolver.js';
import { SkillService } from './skill.service.js';

@Module({
  providers: [SkillResolver, SkillService],
  exports: [SkillService],
})
export class SkillModule {}
