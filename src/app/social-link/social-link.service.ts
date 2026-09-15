import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class SocialLinkService {
  constructor(private readonly prisma: PrismaService) {}

  findByProfileId(profileId: string) {
    return this.prisma.socialLink.findMany({
      where: { profileId },
    });
  }
}
