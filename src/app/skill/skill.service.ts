import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}

  findByProfileId(profileId: string) {
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { level: 'asc' },
    });
  }

  findAll() {
    return this.prisma.skill.findMany({
      orderBy: { level: 'asc' },
    });
  }
}
