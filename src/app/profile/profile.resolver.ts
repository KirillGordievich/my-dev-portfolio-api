import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Profile } from './profile.model.js';
import { SocialLink } from './social-link.model.js';
import { Skill } from '../skill/skill.model.js';
import { Experience } from '../experience/experience.model.js';
import { Project } from '../project/project.model.js';
import { ProfileService } from './profile.service.js';
import { SkillService } from '../skill/skill.service.js';
import { ExperienceService } from '../experience/experience.service.js';
import { ProjectService } from '../project/project.service.js';
import type { Profile as PrismaProfile } from '@prisma/client';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillService: SkillService,
    private readonly experienceService: ExperienceService,
    private readonly projectService: ProjectService,
  ) {}

  @Query(() => Profile, {
    nullable: true,
    description: 'Get the portfolio profile',
  })
  profile() {
    return this.profileService.findFirst();
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: PrismaProfile) {
    return this.skillService.findByProfileId(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: PrismaProfile) {
    return this.experienceService.findByProfileId(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: PrismaProfile) {
    return this.projectService.findByProfileId(profile.id);
  }

  @ResolveField(() => [SocialLink])
  socialLinks(@Parent() profile: PrismaProfile) {
    return this.profileService.findSocialLinks(profile.id);
  }
}
