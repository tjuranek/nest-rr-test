import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SshKeysController } from './sshkeys.controller';
import { SshKeysService } from './sshkeys.service';

@Module({
  imports: [PrismaModule],
  controllers: [SshKeysController],
  providers: [SshKeysService],
})
export class SshKeysModule {}
