import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({ example: 'example@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'example' })
  @IsNotEmpty()
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({ example: 'example@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'example' })
  @IsNotEmpty()
  password: string;
}

export class SessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
  @ApiProperty()
  iat: string;
  @ApiProperty()
  exp: string;
}
