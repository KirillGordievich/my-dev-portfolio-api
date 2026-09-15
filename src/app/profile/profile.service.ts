import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findFirst() {
    return this.prisma.profile.findFirst();
  }

  findSocialLinks(profileId: string) {
    return this.prisma.socialLink.findMany({
      where: { profileId },
    });
  }
}
