import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from 'src/auth/dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { CookieService } from 'src/auth/cookie.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async singUp(
    @Body() { email, password }: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(email, password);
    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {
    return null;
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @Get('session')
  @ApiOkResponse({ type: GetSessionInfoDto })
  getSessionInfo() {
    return null;
  }
}
