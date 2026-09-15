import { Resolver, Query } from '@nestjs/graphql';
import { Experience } from './experience.model.js';
import { ExperienceService } from './experience.service.js';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Query(() => [Experience], { description: 'Get all work experience' })
  experiences() {
    return this.experienceService.findAll();
  }
}
