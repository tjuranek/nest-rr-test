import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SshKeysModule } from './modules/sshkeys/sshkeys.module';

@Module({
  imports: [PrismaModule, SshKeysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
