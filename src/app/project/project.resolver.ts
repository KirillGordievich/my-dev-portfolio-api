import { Resolver, Query } from '@nestjs/graphql';
import { Project } from './project.model.js';
import { ProjectService } from './project.service.js';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project], { description: 'Get all projects' })
  projects() {
    return this.projectService.findAll();
  }
}
