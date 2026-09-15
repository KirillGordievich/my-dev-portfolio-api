import { Module } from '@nestjs/common';
import { SocialLinkService } from './social-link.service.js';

@Module({
  providers: [SocialLinkService],
  exports: [SocialLinkService],
})
export class SocialLinkModule {}
