import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Skill } from '../skill/skill.model.js';
import { Experience } from '../experience/experience.model.js';
import { Project } from '../project/project.model.js';
import { SocialLink } from './social-link.model.js';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];

  @Field(() => [SocialLink])
  socialLinks: SocialLink[];
}
