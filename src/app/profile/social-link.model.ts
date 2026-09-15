import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SocialPlatform } from './enums/social-platform.enum.js';

@ObjectType()
export class SocialLink {
  @Field(() => ID)
  id: string;

  @Field(() => SocialPlatform)
  platform: SocialPlatform;

  @Field()
  url: string;
}
