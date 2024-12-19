import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SshKeysService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { name: string; key: string }) {
    return this.prisma.sshKey.create({ data });
  }

  async getById(id: string) {
    return this.prisma.sshKey.findUnique({ where: { id } });
  }

  async getAll() {
    return this.prisma.sshKey.findMany();
  }

  async update(id: string, data: { name: string; key: string }) {
    return this.prisma.sshKey.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.sshKey.delete({ where: { id } });
  }
}
