import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SkillLevel } from './enums/skill-level.enum.js';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => SkillLevel)
  level: SkillLevel;
}
