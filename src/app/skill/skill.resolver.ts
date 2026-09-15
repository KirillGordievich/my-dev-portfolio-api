import { Resolver, Query } from '@nestjs/graphql';
import { Skill } from './skill.model.js';
import { SkillService } from './skill.service.js';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Query(() => [Skill], { description: 'Get all skills' })
  skills() {
    return this.skillService.findAll();
  }
}
