import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from 'src/account/dto';
import { AccountService } from 'src/account/account.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { SessionInfoDto } from 'src/auth/dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  async create(@SessionInfo() sessionInfo: SessionInfoDto) {
    return await this.accountService.create(sessionInfo.id);
  }

  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  async getAccount(
    @SessionInfo() sessionInfo: SessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.getAccount(sessionInfo.id);
  }

  @Patch()
  patchAccount(
    @SessionInfo() sessionInfo: SessionInfoDto,
    @Body() body: PatchAccountDto,
  ): Promise<AccountDto> {
    return this.accountService.patchAccount(sessionInfo.id, body);
  }
}
