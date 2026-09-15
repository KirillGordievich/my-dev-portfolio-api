import { registerEnumType } from '@nestjs/graphql';
import { SocialPlatform } from '@prisma/client';

registerEnumType(SocialPlatform, { name: 'SocialPlatform' });

export { SocialPlatform };
