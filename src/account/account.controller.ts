import { Controller, Get, Patch } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto } from 'src/account/dto';

@Controller('account')
export class AccountController {
  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  getAccount() {}

  @Patch()
  patchAccount() {}
}
