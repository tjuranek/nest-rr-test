import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SshKeysService } from './sshkeys.service';

@Controller('sshkeys')
export class SshKeysController {
  constructor(private readonly sshKeysService: SshKeysService) {}

  @Post()
  async create(@Body() data: { name: string; key: string }) {
    return this.sshKeysService.create(data);
  }

  @Get()
  async getAll() {
    return this.sshKeysService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.sshKeysService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name: string; key: string },
  ) {
    return this.sshKeysService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.sshKeysService.delete(id);
  }
}
